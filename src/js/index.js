$(function(){
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    $('.carousel').carousel({
      interval: 2000
    });
    $('#contactoModal').on('show.bs.modal', function(e){
      console.log('Se está abriendo al modal')
      $('#btnModal').removeClass('btn-primary');
      $('#btnModal').addClass('btn-danger');
      $('#btnModal').prop('disabled', true);
    });
    $('#contactoModal').on('shown.bs.modal', function(e){
      console.log('Se abrió la modal')
    });
    $('#contactoModal').on('hide.bs.modal', function(e){
      console.log('Se esta ocultando la modal')
    });
    $('#contactoModal').on('hidden.bs.modal', function(e){
      console.log('Se ocultó la modal')
      $('#btnModal').removeClass('btn-danger');
      $('#btnModal').addClass('btn-success');
      $('#btnModal').prop('disabled', false);
    });
    $('#contactoModal').on('hidePrevented.bs.modal', function(e){
    });
  });