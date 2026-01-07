#!/bin/bash

echo "🚀 Iniciando deployment de GDS Ecosystem..."

# Colores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Directorio del proyecto (ajustar según tu configuración de Plesk)
PROJECT_DIR="$(pwd)"
cd $PROJECT_DIR

echo -e "${BLUE}📍 Working directory: $PROJECT_DIR${NC}"

# 1. Pull últimos cambios (si usas git)
if [ -d ".git" ]; then
    echo -e "${BLUE}📥 Pulling latest changes...${NC}"
    git pull origin main
    if [ $? -ne 0 ]; then
        echo -e "${RED}❌ Git pull failed${NC}"
        exit 1
    fi
fi

# 2. Instalar dependencias
echo -e "${BLUE}📦 Installing dependencies...${NC}"
bun install
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Bun install failed${NC}"
    exit 1
fi

# 3. Build todas las apps
echo -e "${BLUE}🔨 Building all apps...${NC}"
bun run build
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed${NC}"
    exit 1
fi

# 4. Crear directorio de logs si no existe
mkdir -p logs

# 5. Reiniciar PM2
echo -e "${BLUE}🔄 Restarting PM2 apps...${NC}"
if command -v pm2 &> /dev/null; then
    pm2 restart ecosystem.config.js
    if [ $? -ne 0 ]; then
        echo -e "${BLUE}Starting PM2 apps for the first time...${NC}"
        pm2 start ecosystem.config.js
    fi
    
    # Guardar configuración de PM2
    pm2 save
else
    echo -e "${RED}⚠️  PM2 not found. Please install: npm install -g pm2${NC}"
    exit 1
fi

# 6. Verificar status
echo -e "${BLUE}✅ Checking status...${NC}"
pm2 status

# 7. Mostrar logs recientes
echo -e "${BLUE}📋 Recent logs:${NC}"
pm2 logs --lines 10 --nostream

echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
echo -e "${GREEN}📊 Apps running on:${NC}"
echo -e "  - WWW:       http://localhost:3000 → https://gdsgt.net"
echo -e "  - ERP:       http://localhost:3001 → https://erp.grupogds.co"
echo -e "  - Services:  http://localhost:3002 → https://services.gdsgt.net"
echo -e "  - Resources: http://localhost:3003 → https://resources.gdsgt.net"
