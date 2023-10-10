function downloadPDF() {
    const fileName = 'Hamza Mughales CV';
    const link = document.createElement('a');
    link.href = 'assets/cv/Hamza Mughales CV.pdf';
    link.download = fileName;
    link.target = '_blank'
    link.click();
}

const downloadBtn = document.getElementById('download-cv');
downloadBtn.addEventListener('click', downloadPDF);