<!DOCTYPE html>
<html lang="pt-br">
<head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Curriculo online de Rogério Furquim da Fonseca">
	  <title>Email enviado</title>
	  <script src="js/vex.combined.js"></script>
	  <link rel="stylesheet" href="css/vex-theme-flat-attack.css" />
	  <link rel="stylesheet" href="css/vex.css" />
</head>
<body>

<?php
		date_default_timezone_set('America/Sao_Paulo');
		$arquivo = fopen("reg.txt", "a+");

		//PEGA OS DADOS ENVIADOS PELO FORMULÁRIO
		$email	=	$_POST["email"];
		$mensagem	=	$_POST["mensagem"];
		$data = date('d/m/y');
		$hora = date('H:i:s');

		//PREPARA O CONTEÚDO A SER GRAVADO
		$conteudo	=	"\r\n$data \t$hora \t$email \t$mensagem\r\n";

		//ARQUIVO TXT
		$arquivo	= "reg.txt";

		//TENTA ABRIR O ARQUIVO TXT
		if (!$abrir = fopen($arquivo, "a+")) {
				echo  "Erro abrindo arquivo ($arquivo)";
				exit;
		   }

		//ESCREVE NO ARQUIVO TXT
		if (!fwrite($abrir, $conteudo)) {
			   print "Erro escrevendo no arquivo ($arquivo)";
			   exit;
		   }

		$mensagem = "Obrigado " . $email . ", sua mensagem foi enviada com sucesso!" ;

		//FECHA O ARQUIVO 
		fclose($abrir);
?>

<script type="text/javascript">
   alert( '<?php echo $mensagem ?>' );
    window.location.href = "http://curriculo.rogerioweb.com/";
</script>

</body>
</html>