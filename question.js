const q = [
    {
        id: 1,
        q: `A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?`,
        op1: '120 metres',
        op2: '180 metres',
        op3: '324 metres',
        op4: '150 metres',
        ans: '180 metres',
        exp: `
        Speed =		60 x	5	m/sec	=		50	m/sec.
        18	3
        Length of the train = (Speed x Time).
        
         Length of the train =		50	x 9	m = 150 m.
        3
        `
    },
    {
        id: 2,
        q: `A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:`,
        op1: '45 km/hr',
        op2: '50 km/hr',
        op3: '54 km/hr',
        op4: '55 km/hr',
        ans: '50 km/hr',
        exp: `Speed of the train relative to man =		125	m/sec
        10
           =		25	m/sec.
        2
           =		25	x	18	km/hr
        2	5
           = 45 km/hr.
        
        Let the speed of the train be x km/hr. Then, relative speed = (x - 5) km/hr.
        
         x - 5 = 45          x = 50 km/hr.`
    },
    {
        id: 3,
        q: `The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:`,
        op1: `200 m`,
        op2: `225 m`,
        op3: `245 m`,
        op4: `250 m`,
        ans: `245 m`,
        exp: `Speed =		45 x	5	m/sec	=		25	m/sec.
        18	2
        Time = 30 sec.
        
        Let the length of bridge be x metres.
        
        Then,	130 + x	=	25
        30	2
         2(130 + x) = 750
        
         x = 245 m.`
    },
    {
        id: 4,
        q: `Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:`,
        op1: `1 : 3`,
        op2: `3 : 2`,
        op3: `3 : 4`,
        op4: `None of these`,
        ans: `3 : 2`,
        exp: `Let the speeds of the two trains be x m/sec and y m/sec respectively.

        Then, length of the first train = 27x metres,
        
        and length of the second train = 17y metres.
        
            27x + 17y	= 23
        x+ y
         27x + 17y = 23x + 23y
        
         4x = 6y
        
            x	=	3	.
        y	2
        `
    },
    {
        id: 5,
        q: `A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?`,
        op1: `120 m`,
        op2: `240 m`,
        op3: `300 m`,
        op4: `None of these`,
        ans: `240 m`,
        exp: `Speed =		54 x	5	m/sec = 15 m/sec.
        18
        Length of the train = (15 x 20)m = 300 m.
        
        Let the length of the platform be x metres.
        
        Then,	x + 300	= 15
        36
         x + 300 = 540
        
         x = 240 m.`
    }

]