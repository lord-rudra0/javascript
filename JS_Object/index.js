var bel_boy1={
    name:"abc",
    age:22,
    languages:["Hindi","English"]
}

var housekeeper1={
    name:"abc",
    age:22,
    worked:["A","B","C"],
    exp:12

}

// constructor Function

function BellBoy(name,age,languages)
{
this.name=name;
this.age=age;
this.languages=languages;
}

var BellBoy3=new BellBoy("ABC",22,["Hindi","English"]);

function HouseKeeper(name,age,worked,exp)
{
    this.name=name;
    this.age=age;
    this.worked=worked;
    this.exp=exp;
}

var housekeeper2=new HouseKeeper("abc",44,["A","B"],6)