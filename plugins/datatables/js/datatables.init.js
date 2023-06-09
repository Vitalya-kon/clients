(function($) {
    "use strict"
    // -----------DataTables
    var data = [
        [
            "00000001",
            "КЦ 1",
            "Иванов Иван Иванович",
            "88008888888",
            "01.01.2001 10.00",
            "Иванов И.И",
            "Договор",
            "7",
            "14",
        ],
        [
            "00000002",
            "КЦ 2",
            "Петров Петр Петрович",
            "88008877788",
            "02.02.2002 20.00",
            "Петров П.П",
            "Отклонен",
            "4",
            "10",
        ]
    ]
        $(document).ready( function () {
            var table =  $('#myTable').DataTable({
              columns: [
                { title: '№ Клиента' },
                { title: 'Источник' },
                { title: 'ФИО' },
                { title: 'Номер телефона' },
                { title: 'Дата / Время посещения' },
                { title: 'Консультант' },
                { title: 'Статус' },
                { title: 'Приходы' },
                { title: 'Договоры' },
                { title: '' },
              ],
              createdRow: function ( row, data, index ) {
                    $(row).addClass('selected')
                } 
          });
          table.on('click', 'tbody tr', function() {
            var $row = table.row(this).nodes().to$();
            var hasClass = $row.hasClass('selected');
            if (hasClass) {
                $row.removeClass('selected')
            } else {
                $row.addClass('selected')
            }
            })
            
            table.rows().every(function() {
            this.nodes().to$().removeClass('selected')
            });
        });     
})(jQuery);