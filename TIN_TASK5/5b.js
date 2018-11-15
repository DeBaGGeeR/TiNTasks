function Student(name,lastname,id,grade){
    this.name=name;
    this.lastname=lastname;
    this.id=id;
    this.grade=grade;
  
    this.info = function(){
      var sum=0;
      for(var i=0;i<this.grade.length;i++){
        sum+=i;
      }
      var result = sum/this.grade.length;
      return this.name+" "+this.lastname+" "+id+" "+result;
    }
  }
  
  var student = new Student('Bakhodir','Ibragimov',16226,[4,5,3,5,4,4,3]);
  console.log(student.info());