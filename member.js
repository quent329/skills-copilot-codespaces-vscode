function skillsMember() {
    var member = {
        name: 'John',
        age: 30,
        skills: ['HTML', 'CSS', 'JS'],
        getSkills: function() {
            member.skills.forEach(function(skill) {
                console.log(skill);
            });
        }
    }
    return member;
}