$(document).ready(function() {
  $('#btn-adicionar').click(function(e) {
    e.preventDefault();
    var nomeTarefa = $('#nome-tarefa').val();
    if (nomeTarefa !== '') {
      $('#lista-tarefas').append('<li>' + nomeTarefa + '</li>');
      $('#nome-tarefa').val('');
    }
  });

  $('#lista-tarefas').on('click', 'li', function() {
    $(this).toggleClass('concluido');
  });
});
//fim do programa.