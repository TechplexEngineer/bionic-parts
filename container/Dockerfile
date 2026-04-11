FROM python:3.13-alpine AS builder

RUN apk add --no-cache gcc musl-dev linux-headers

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir --prefix=/install -r requirements.txt

FROM python:3.13-alpine

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

COPY --from=builder /install /usr/local

COPY . .

RUN chown -R appuser:appgroup /app

USER appuser

EXPOSE 3000

# PYTHONUNBUFFERED=1 forces stdout/stderr to be unbuffered so logs appear immediately in Docker
ENV PYTHONUNBUFFERED=1

CMD ["python", "server.py"]
