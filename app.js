async function generate(){

const excel=document.getElementById('excel').files[0];
const zip=document.getElementById('zip').files[0];

if(!excel || !zip){
alert('Upload Excel dan ZIP');
return;
}

document.getElementById('status').innerHTML=
'Memproses data...';

// Engine hook:
// 1. JSZip membaca ZIP area
// 2. SheetJS membaca template
// 3. OCR JW3208
// 4. Export XLSX

setTimeout(()=>{
document.getElementById('status').innerHTML=
'Engine siap. Hubungkan modul OCR dan Excel.';
},1000);

}
