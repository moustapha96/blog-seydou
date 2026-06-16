#!/usr/bin/env bash
# ============================================================
#  Sauvegarde automatique de la base PostgreSQL (Linux / VPS)
#  A planifier via cron, ex : 0 3 * * *  /chemin/backup.sh
# ============================================================
set -euo pipefail

# --- Configuration (a adapter, ou via variables d'environnement) ---
export PGHOST="${PGHOST:-localhost}"
export PGPORT="${PGPORT:-5432}"
export PGUSER="${PGUSER:-user}"
export PGPASSWORD="${PGPASSWORD:-password}"
PGDATABASE="${PGDATABASE:-blog_ucad}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BACKUP_DIR="${BACKUP_DIR:-$SCRIPT_DIR/../backups}"
RETENTION_DAYS="${RETENTION_DAYS:-14}"

mkdir -p "$BACKUP_DIR"
STAMP=$(date +%Y-%m-%d_%H%M)
FILE="$BACKUP_DIR/blog_ucad_${STAMP}.dump"

echo "Sauvegarde de $PGDATABASE ..."
pg_dump -F c -f "$FILE" "$PGDATABASE"
echo "Sauvegarde reussie : $FILE"

# Rotation : supprime les sauvegardes plus vieilles que RETENTION_DAYS
find "$BACKUP_DIR" -name 'blog_ucad_*.dump' -mtime +"$RETENTION_DAYS" -delete
echo "Rotation effectuee (> ${RETENTION_DAYS} jours supprimes)"

# Restauration :
#   pg_restore -h localhost -U user -d blog_ucad --clean blog_ucad_AAAA-MM-JJ_HHMM.dump
