$(document).ready(function() {
    /**
     * Add evento de click
     */
    function onAdd() {
          var $ul, li, $li, $label, $div, nota;
          razaoSocial = $('#razaoSocialInput').val();
          CNPJ = $('#CNPJInput').val();
          email = $('#emailInput').val();

          if (!razaoSocial ||!CNPJ|| !email) {
                 alert("todos os campos são obrigatórios");
                 return
          }

          $ul = $('ul');
          $li = $('<li>').appendTo($ul);
          $div = $('<div>')
                 .addClass('checkbox')
                 .appendTo($li);

          $label = $('<label>').appendTo($div);
          $('<input>')
                 .attr('type', 'checkbox')
                 .addClass('js-nota')
                 .attr('name', 'list')
                 .click(toggleRemovido)
                 .appendTo($label);

          $label.append(razaoSocial+' - '+CNPJ);
          $('.js-nova-nota').val('');
          
        }

    
    function toggleRemovido(ev) {
          var $el;
          $el = $(ev.currentTarget);
          $el.closest('li').toggleClass('removido');
    }
    $('.js-add').click(onAdd);
    $('.js-nota').click(toggleRemovido);

    $("#CNPJInput").mask("99.999.999/9999-99");
    $('#CNPJInput').keydown(function() {
        $(this).val(this.value.replace(/\D/g, ''));
      });
});