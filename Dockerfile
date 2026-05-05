# syntax=docker/dockerfile:1

FROM node:22-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app

FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

FROM base AS builder
ARG NEXT_PUBLIC_ALLOW_INDEXING=false
ARG NEXT_PUBLIC_YANDEX_MAPS_API_KEY
ARG NEXT_PUBLIC_YANDEX_METRIKA_ID
ARG NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID
ARG YANDEX_WEBMASTER_VERIFICATION
ENV NEXT_PUBLIC_ALLOW_INDEXING=$NEXT_PUBLIC_ALLOW_INDEXING
ENV NEXT_PUBLIC_YANDEX_MAPS_API_KEY=$NEXT_PUBLIC_YANDEX_MAPS_API_KEY
ENV NEXT_PUBLIC_YANDEX_METRIKA_ID=$NEXT_PUBLIC_YANDEX_METRIKA_ID
ENV NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID=$NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID
ENV YANDEX_WEBMASTER_VERIFICATION=$YANDEX_WEBMASTER_VERIFICATION
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
