var student = {array:['Mathematics','Physics','Chemistry']};
 Prototype = function(name,lastname,id){
  var StudentPrototype = Object.create(student);
  StudentPrototype.array[3]='Informatics';
  StudentPrototype.name=name;
  StudentPrototype.lastname=lastname;
  StudentPrototype.id=id; 
   return StudentPrototype.name+" "+StudentPrototype.lastname+" "+StudentPrototype.id+" "+StudentPrototype.array[3];
  }
 
 console.log(Prototype('Jim','Kerry',23));