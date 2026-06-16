@echo off
REM ============================================================
REM  Sauvegarde automatique de la base PostgreSQL (Windows)
REM  Usage : double-clic ou planificateur de taches Windows
REM ============================================================

setlocal

REM --- Configuration (a adapter) ---
set PGHOST=localhost
set PGPORT=5432
set PGUSER=user
set PGPASSWORD=password
set PGDATABASE=blog_ucad
set BACKUP_DIR=%~dp0..\backups
set PG_BIN=C:\Program Files\PostgreSQL\17\bin

REM --- Horodatage AAAA-MM-JJ_HHMM ---
for /f "tokens=2 delims==" %%a in ('wmic OS Get localdatetime /value') do set dt=%%a
set STAMP=%dt:~0,4%-%dt:~4,2%-%dt:~6,2%_%dt:~8,2%%dt:~10,2%

if not exist "%BACKUP_DIR%" mkdir "%BACKUP_DIR%"

echo Sauvegarde de %PGDATABASE% en cours...
"%PG_BIN%\pg_dump.exe" -h %PGHOST% -p %PGPORT% -U %PGUSER% -F c -f "%BACKUP_DIR%\blog_ucad_%STAMP%.dump" %PGDATABASE%

if %ERRORLEVEL% EQU 0 (
  echo Sauvegarde reussie : %BACKUP_DIR%\blog_ucad_%STAMP%.dump
) else (
  echo ECHEC de la sauvegarde
)

REM --- Rotation : conserve les 14 dernieres sauvegardes ---
for /f "skip=14 delims=" %%f in ('dir /b /o-d "%BACKUP_DIR%\blog_ucad_*.dump" 2^>nul') do del "%BACKUP_DIR%\%%f"

endlocal
