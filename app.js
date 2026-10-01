
async function generate(){

const excelFile=document.getElementById("excel").files[0];
const zipFile=document.getElementById("zip").files[0];
const status=document.getElementById("status");

if(!excelFile || !zipFile){
alert("Upload template Excel dan ZIP area");
return;
}

status.innerHTML="Membaca ZIP area...";

try{

const zip = await JSZip.loadAsync(zipFile);

let files=[];

Object.keys(zip.files).forEach(name=>{
    if(name.toUpperCase().includes("OPM FAT")){
        files.push(name);
    }
});

status.innerHTML =
"Ditemukan "+files.length+" file OPM FAT";

console.log(files);

}catch(error){

status.innerHTML="Error "+error.message;

}

}
