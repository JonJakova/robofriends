export const robots = [
    {
        id: Math.floor(Math.random()*1000000000+1),
        name: 'testRobot1',
        email: () => this.name+"@gmail.com"
    },
    {
        id: Math.floor(Math.random()*1000+1),
        name: 'testRobot2',
        email: () => this.name+"@gmail.com"
    },
    {
        id: Math.floor(Math.random()*1000+1),
        name: 'testRobot3',
        email: function() {
            debugger;
            return this.name+"@gmail.com";
        }
    },
]