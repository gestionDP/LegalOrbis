import sharp from 'sharp';
import * as fs from 'fs';
import * as path from 'path';
import toIco from 'to-ico';

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
    const png16 = await sharp(svgPath).resize(16, 16).png().toBuffer();
    await fs.promises.writeFile(
      path.join(publicDir, 'favicon-16x16.png'),
      png16
    );
    console.log('✓ favicon-16x16.png generado');

    // Generar favicon-32x32.png
    const png32 = await sharp(svgPath).resize(32, 32).png().toBuffer();
    await fs.promises.writeFile(
      path.join(publicDir, 'favicon-32x32.png'),
      png32
    );
    console.log('✓ favicon-32x32.png generado');

    // Generar favicon-48x48.png (tamaño recomendado por Google, mínimo para resultados de búsqueda)
    const png48 = await sharp(svgPath).resize(48, 48).png().toBuffer();
    await fs.promises.writeFile(
      path.join(publicDir, 'favicon-48x48.png'),
      png48
    );
    console.log('✓ favicon-48x48.png generado');

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

    // Generar favicon.ico verdadero (multisize: 16x16, 32x32, 48x48)
    try {
      const icoBuffer = await toIco([png16, png32, png48]);
      await fs.promises.writeFile(
        path.join(publicDir, 'favicon.ico'),
        icoBuffer
      );
      console.log(
        '✓ favicon.ico generado (verdadero archivo ICO con múltiples tamaños: 16x16, 32x32, 48x48)'
      );
    } catch (icoError) {
      console.warn(
        '⚠️  No se pudo generar ICO verdadero, usando PNG como fallback'
      );
      await fs.promises.writeFile(path.join(publicDir, 'favicon.ico'), png32);
      console.log('✓ favicon.ico generado (PNG 32x32 como fallback)');
    }

    console.log('\n✅ Todos los favicons han sido generados exitosamente!');
  } catch (error) {
    console.error('❌ Error al generar favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
