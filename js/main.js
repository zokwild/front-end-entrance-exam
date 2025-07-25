const handlePrint = () => {
		event.preventDefault();
			var element = document.getElementById('container_content'); 

			var opt = 
			{
			  margin:       0,
			  filename:     'резюме.pdf',
			  image:        { type: 'jpeg', quality: 0.98 },
			  html2canvas:  { scale: 5 },
			  jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
			};

			html2pdf().set(opt).from(element).save();
}
