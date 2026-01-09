import sharp from 'sharp';
import * as fs from 'fs';
import * as path from 'path';

const publicDir = path.join(process.cwd(), 'public');
const svgPath = path.join(publicDir, 'favicon.svg');

async function generateFavicons() {
  try {
    // Verificar que el SVG existe
    if (!fs.existsSync(svgPath)) {
      throw new Error(`No se encontró el archivo ${svgPath}`);
    }

    console.log('Generando favicons desde favicon.svg...');

    // Generar favicon-16x16.png
    await sharp(svgPath)
      .resize(16, 16)
      .png()
      .toFile(path.join(publicDir, 'favicon-16x16.png'));
    console.log('✓ favicon-16x16.png generado');

    // Generar favicon-32x32.png
    await sharp(svgPath)
      .resize(32, 32)
      .png()
      .toFile(path.join(publicDir, 'favicon-32x32.png'));
    console.log('✓ favicon-32x32.png generado');

    // Generar favicon-96x96.png (tamaño preferido por Google para resultados de búsqueda)
    await sharp(svgPath)
      .resize(96, 96)
      .png()
      .toFile(path.join(publicDir, 'favicon-96x96.png'));
    console.log('✓ favicon-96x96.png generado');

    // Generar apple-touch-icon.png (180x180)
    await sharp(svgPath)
      .resize(180, 180)
      .png()
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));
    console.log('✓ apple-touch-icon.png generado');

    // Generar favicon.ico (multisize: 16x16, 32x32)
    // sharp no soporta ICO directamente, así que generamos un PNG de 32x32 como favicon.ico
    // Nota: Para un verdadero .ico necesitarías una librería adicional como 'to-ico'
    await sharp(svgPath)
      .resize(32, 32)
      .png()
      .toFile(path.join(publicDir, 'favicon.ico'));
    console.log('✓ favicon.ico generado (PNG 32x32)');

    console.log('\n✅ Todos los favicons han sido generados exitosamente!');
    console.log('\n📝 Nota: Para generar un favicon.ico verdadero, considera usar una herramienta online como:');
    console.log('   https://realfavicongenerator.net/');
    console.log('   o instalar: npm install --save-dev to-ico');

  } catch (error) {
    console.error('❌ Error al generar favicons:', error);
    process.exit(1);
  }
}

generateFavicons();

