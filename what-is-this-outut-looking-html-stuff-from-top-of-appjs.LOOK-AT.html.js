<!DOCTYPE html>
<html>
    <head>
    <title>Pixelator</title>
    <style type="text/css">
        .theImage {
            border: 1px dotted black;
            margin: 2px;
			border: 2px;
        }
		.titleFrame { 
			display: inline-block;
			border: 2px dashed black; 
			margin: 10px;
			width: ${imageWidth}px;
		}
		.title {
			font-size: 24px;
			margin: 20px;
			font-family: Helvetica, sans-serif;
		}
		.imageFrame { 
			display: inline-block;
			border: 2px solid red; 
			margin: 10px;
			margin-bottom: 5px;
		}
		.reportFrame {
			border: 1px dotted black;
			width: ${imageWidth}px;
			margin: 10px;
			line-height: 1.5;
		}
		.report {
			margin: 10px;
			font-size: 12px;
			font-family: Courier, Courier New;
		}
    </style>
    </head>
    <body>
	<div class="titleFrame">
		<p class="title">Pixelator</p>
	</div>
	<div></div>
    <div class="imageFrame">
        <img 
            class="theImage"
			width="${imageWidth}" height="${imageHeight}"
            src="${dataUrl}"
            />
	</div>
	<div class="reportFrame">
		<p class="report">
			${report
				.replace(new RegExp('\n', "g"), '<br/>')
				.replace(new RegExp('=', 'g'), '<strong>')
				.replace(new RegExp(';', 'g'), '</strong>')
			}
		</p>
	</div>
    </body>  
</html>
