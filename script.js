function main() {
     return {
          animals : [
               'Dog',
               'Cat',
               'Parrot',
               'Worm',
               'Pard',
          ]
     }
}
function list() {
     return {
          Employees : [
               {
                    Name : 'Juan',
                    LastName : 'Prada',
                    Age : 20,
                    City : 'Medellin-Colombia'
               },
               {
                    Name : 'Juliana',
                    LastName : 'Ospina',
                    Age : 17,
                    City : 'Medellin-Colombia'
               },
               {
                    Name : 'Carlitos',
                    LastName : 'Ospina',
                    Age : 20,
                    City : 'Medellin-Colombia'
               },
               {
                    Name : 'Jacinto',
                    LastName : 'Prada',
                    Age : 20,
                    City : 'Medellin-Colombia'
               }
          ],
          start : function() {
               prompt(this.animals)
               if (true) {console.log(this.Employees)}
               setTimeout(() => {alert(name)}, 5000);
          } 
     }
}