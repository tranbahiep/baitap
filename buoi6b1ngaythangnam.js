   var currentYear = new Date().getFullYear();
              var selectElement = document.getElementById("nam");
              
              for (var year = 1980; year <= currentYear; year++) {
                var option = document.createElement("option");
                option.value = year;
                option.text = year;
                selectElement.appendChild(option);
              }  var selectNgay = document.getElementById("ngay");
              var selectThang = document.getElementById("thang");
               
             for (var day = 1; day <= 31; day++) {
                var option = document.createElement("option");
                option.value = day;
                option.text = day;
                selectNgay.appendChild(option);
              }
              for (var month = 1; month <= 12; month++) {
                var option = document.createElement("option");
                option.value = month;
                option.text = month;
                selectThang.appendChild(option);
              }