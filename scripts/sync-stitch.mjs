import fs from 'node:fs';
import path from 'node:path';

const API_KEY = process.env.STITCH_API_KEY;
if (!API_KEY) {
  throw new Error('Missing STITCH_API_KEY environment variable.');
}
const MCP_URL = 'https://stitch.googleapis.com/mcp';

async function callMcpTool(name, args) {
  const resp = await fetch(MCP_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': API_KEY,
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: Date.now(),
      method: 'tools/call',
      params: {
        name,
        arguments: args,
      },
    }),
  });

  if (!resp.ok) {
    throw new Error(`MCP request failed: ${resp.status} ${resp.statusText}`);
  }

  const data = await resp.json();
  if (data.error) {
    throw new Error(`MCP error: ${JSON.stringify(data.error)}`);
  }
  return data.result;
}

async function main() {
  console.log('--- Starting Stitch Assets Sync ---');
  fs.mkdirSync('stitch', { recursive: true });
  fs.mkdirSync('public/stitch', { recursive: true });

  // 1. Download DESIGN.md (Screen ID: 7851360273715756732)
  console.log('Downloading DESIGN.md...');
  const designResult = await callMcpTool('download_file', {
    name: 'projects/6247226480073872663/files/7851360273715756533',
  });
  const designText = designResult.structuredContent?.html || JSON.parse(designResult.content?.[0]?.text || '{}').html;
  if (designText) {
    fs.writeFileSync('DESIGN.md', designText, 'utf-8');
    fs.writeFileSync('stitch/DESIGN.md', designText, 'utf-8');
    console.log(`Saved DESIGN.md (${designText.length} chars)`);
  } else {
    console.error('Failed to get DESIGN.md content:', designResult);
  }

  // 2. Download image.png (Screen ID: 14563339060030028095)
  console.log('Downloading image.png (approx 5.4MB)...');
  const imgResult = await callMcpTool('download_file', {
    name: 'projects/6247226480073872663/files/14563339060030029268',
  });
  const base64Data = imgResult.structuredContent?.image || JSON.parse(imgResult.content?.[0]?.text || '{}').image;
  if (base64Data) {
    const buffer = Buffer.from(base64Data, 'base64');
    fs.writeFileSync('public/stitch/image.png', buffer);
    console.log(`Saved public/stitch/image.png (${buffer.length} bytes)`);
  } else {
    console.error('Failed to get image.png content');
  }

  // 3. Download Beranda Screen HTML (Screen ID: 4682d6590d9241279b041d452f8a8663)
  console.log('Downloading Beranda screen HTML...');
  const berandaResult = await callMcpTool('download_file', {
    name: 'projects/6247226480073872663/files/11459162295930982400',
  });
  const berandaHtml = berandaResult.structuredContent?.html || JSON.parse(berandaResult.content?.[0]?.text || '{}').html;
  if (berandaHtml) {
    fs.writeFileSync('stitch/beranda.html', berandaHtml, 'utf-8');
    console.log(`Saved stitch/beranda.html (${berandaHtml.length} chars)`);
  }

  // 4. Download Profil Desa Screen HTML
  console.log('Downloading Profil Desa screen HTML...');
  const profilResult = await callMcpTool('download_file', {
    name: 'projects/6247226480073872663/screens/2d4b046891564482b65022f81e84a0bc/fileEntries/html',
  });
  const profilHtml = profilResult.structuredContent?.html || JSON.parse(profilResult.content?.[0]?.text || '{}').html;
  if (profilHtml) {
    fs.writeFileSync('stitch/profil-desa.html', profilHtml, 'utf-8');
    console.log(`Saved stitch/profil-desa.html (${profilHtml.length} chars)`);
  }

  // 5. Download Pemerintahan Desa Screen HTML
  console.log('Downloading Pemerintahan Desa screen HTML...');
  const pemResult = await callMcpTool('download_file', {
    name: 'projects/6247226480073872663/screens/8a8a622639284959985cd007ffee5dc0/fileEntries/html',
  });
  const pemHtml = pemResult.structuredContent?.html || JSON.parse(pemResult.content?.[0]?.text || '{}').html;
  if (pemHtml) {
    fs.writeFileSync('stitch/pemerintahan-desa.html', pemHtml, 'utf-8');
    console.log(`Saved stitch/pemerintahan-desa.html (${pemHtml.length} chars)`);
  }

  // 6. Download Data & Statistik Screen HTML
  console.log('Downloading Data & Statistik screen HTML...');
  const dataResult = await callMcpTool('download_file', {
    name: 'projects/6247226480073872663/screens/12b397112afc4aa1b14b89514f614ee7/fileEntries/html',
  });
  const dataHtml = dataResult.structuredContent?.html || JSON.parse(dataResult.content?.[0]?.text || '{}').html;
  if (dataHtml) {
    fs.writeFileSync('stitch/data-statistik.html', dataHtml, 'utf-8');
    console.log(`Saved stitch/data-statistik.html (${dataHtml.length} chars)`);
  }

  console.log('--- Stitch Assets Sync Finished Successfully ---');
}

main().catch((err) => {
  console.error('Error during sync:', err);
  process.exit(1);
});
