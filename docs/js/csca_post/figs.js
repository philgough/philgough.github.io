console.log('hello there');

// variables
var bluecol = '#006df4'
var svgDims = {
    'width': 750,
    'height': 800,
    'padding': 10
};

var fig1 = function() {
    var useRQ = [
        {'index':'a','title':"Eliminate Stress",'value':28, 'fullTitle':'Eliminate Stress'},
        {'index':'b','title':"Relaxation",'value':18, 'fullTitle':'Relaxation'},
        {'index':'c','title':"Good Sleep",'value':17, 'fullTitle':'Good Sleep / Insomnia'},
        {'index':'d','title':"Control emotions",'value':20, 'fullTitle':'Control / manage / maintain emotions'},
        {'index':'e','title':"Reduce anxiety",'value':29, 'fullTitle':'Reduce anxiety'},
        {'index':'f','title':"Improve mood",'value':10, 'fullTitle':'Improve mood '},
        {'index':'g','title':"Happiness",'value':10, 'fullTitle':'Happiness / well-being'},
        {'index':'h','title':"Motivation",'value':3, 'fullTitle':'Motivation'},
        {'index':'i','title':"Focus",'value':10, 'fullTitle':'Focus'},
        {'index':'j','title':"Physical health",'value':10, 'fullTitle':'Physical health'},
        {'index':'k','title':"Metaphysical",'value':3, 'fullTitle':'Metaphysical benefits'},
        {'index':'l','title':"Build resilience",'value':4, 'fullTitle':'Build resilience / coping skills'},
        {'index':'m','title':"Improve self-esteem",'value':12, 'fullTitle':'Improve self-esteem / self-love / self-acceptance'},
        {'index':'n','title':"Improve relationships",'value':9, 'fullTitle':'Improve interpersonal relationships'},
        {'index':'o','title':"Tracking",'value':3, 'fullTitle':'Tracking / monitor'},
        {'index':'p','title':"Creativity",'value':4, 'fullTitle':'Creativity'},
        {'index':'q','title':"Assess mental health",'value':5, 'fullTitle':'Assess mental health / state of mind'},
        {'index':'r','title':"Empowerment",'value':11, 'fullTitle':'Empowerment / peace / zen / mindfulness'},
        {'index':'s','title':"Addiction",'value':2, 'fullTitle':'Addiction'},
        {'index':'t','title':"Depression",'value':15, 'fullTitle':'Depression'},
        ];
    
    var max = 0;
    useRQ.forEach(function(d, i) {if (max < d.value) {max = d.value}});    
    
    var xScale = d3.scaleLinear()
    .domain([0, max + 1])
    .range([svgDims.padding, svgDims.width - svgDims.padding]);
    
    var yScale = d3.scaleLinear()
    .domain([0, useRQ.length])
    .range([0, svgDims.height - (svgDims.padding * 2)])
    
    
    
    var x_axis = d3.axisBottom()
    .scale(xScale)
    
    
    var figure1ax = d3.select('#fig1-q1egs')
        .append('g')
        .attr('class', 'x-axis')
        .attr('transform', 'translate(0, ' + yScale(useRQ.length) + ')' )
        .call(x_axis)
    // x_axis.style('transform', 'translate(0, '+(svgDims.height - svgDims.padding)+')')
    
    // create legend
    var figure1Hover = d3.select('#fig1-q1egs-hover')

        .style('visibility', 'hidden')
        .style('position', 'relative')
        .style('text-align', 'center')
        .style('height', '2rem');

    
    // Figure 1 #fig1-q1egs
    // create group element in the svg to draw to. 
    figure1 = d3.select('#fig1-q1egs')
    .attr('width', svgDims.width)
    .attr('height', svgDims.height)
	    .append('g');

    // draw rects
    figure1.selectAll('rect')
        .data(useRQ)
        .enter()
        .append('rect')
        .attr('x', function(d, i) {
            // // calculate x-position
            // return xScale(i)
            return xScale(0);
        })
        .attr('y', function(d, i) {
            // console.log("Kenobi San!", d)
            
            // return yScale(d.value);
            return yScale(i+.05);
        })
        .attr('width', function(d) {
            // return xScale(.95);
            return xScale(d.value);
        })
        .attr('height', function(d, i) {
            // console.log("Kenobi San!", d)
            
            // return svgDims.height - yScale(d.value);
            return yScale(0.9);
        })
        .style('fill', '#fff')
        .style('stroke', '#000')

        .on("mouseover", function(c, d, i) {
            // console.log('general kenobi!');
            // console.log(d)
            figure1Hover
                .html(d.fullTitle + '<br />' + d.value + ' apps')
                .style('color', bluecol)
                .style('font-family', 'sans-serif')
                .style('visibility', 'visible')
                .style('left', (d3.eventPageX)+'px')
                .style('right', (d3.eventPageX-28), 'px')
        })
        .on('mouseout', function(d) {
            // console.log('so uncivilised')
            figure1Hover.style('visibility', 'hidden')
        });
    
    figure1.selectAll('text')
        .data(useRQ)
        .enter()
        .append("text")
        .text(function (d) {
            return d.title;
        })
        .attr('transform', function(d, i) {
            let x = xScale(0.5);
            let y = yScale(i + .7);
            return 'translate('+x+','+y+')';
        })
        .style('fill', bluecol)
        .style('font-family', 'sans-serif')
        .on("mouseover", function(c, d, i) {
            // console.log('general kenobi!');
            // console.log(d)
            figure1Hover
                .html(d.fullTitle + '<br />' + d.value + ' apps')
                .style('color', bluecol)
                .style('font-family', 'sans-serif')
                .style('visibility', 'visible')
                .style('left', (d3.eventPageX)+'px')
                .style('right', (d3.eventPageX-28), 'px')
        })
        .on('mouseout', function(d) {
            // console.log('so uncivilised')
            figure1Hover.style('visibility', 'hidden')
        });
    
    };




var fig2 = function() {
    var appPromises = [
        ['Anti Stress Meditation' , 1, ['Eliminate Stress']],
        ['Colors: Anti-Stress Relax Sleep' , 4, ['Eliminate Stress', 'Relaxation', 'Good Sleep/Insomnia', 'creativity']],
        ['Yoga poses for stress relief: Stretching exercises' , 3, ['Eliminate Stress', 'Relaxation', 'reduce anxiety']],
        ['Music for Meditation' , 11, ['Eliminate Stress', 'Good Sleep/Insomnia', 'control / manage / maintain emotions', 'reduce anxiety', 'happiness / well-being', 'motivation', 'focus', 'physical health', 'improve interpersonal relationships', 'creativity']],
        ['Breath Ball: The Stress Relief Breathing Exercise.' , 4, ['Eliminate Stress', 'Good Sleep/Insomnia', 'reduce anxiety', 'physical health']],
        ['Anti-stress Chromotherapy' , 1, ['Eliminate Stress']],
        ['Daily Yoga For Stress Relief' , 8, ['Eliminate Stress', 'Relaxation', 'control / manage / maintain emotions', 'reduce anxiety', 'improve mood', 'physical health', 'metaphysical benefits']],
        ['Stress Less Cards' , 4, ['Eliminate Stress', 'Good Sleep/Insomnia', 'reduce anxiety', 'physical health']],
        ['Wysa: stress depression & anxiety therapy chatbot' , 9, ['Eliminate Stress', 'Relaxation', 'Good Sleep/Insomnia', 'control / manage / maintain emotions', 'reduce anxiety', 'focus', 'build resilience / coping skills', 'improve self-esteem / self-love / self-acceptance']],
        ['Relax Lite: Stress Relief' , 5, ['Relaxation', 'Good Sleep/Insomnia', 'reduce anxiety', 'focus', 'physical health']],
        ['End Anxiety Hypnosis - Stress Panic Attack Help' , 3, ['Eliminate Stress', 'reduce anxiety']],
        ['Headspace: Meditation & Sleep' , 10, ['Eliminate Stress', 'Relaxation', 'Good Sleep/Insomnia', 'control / manage / maintain emotions', 'reduce anxiety', 'improve mood', 'happiness / well-being', 'motivation', 'focus']],
        ['(Sanvello) Pacifica - Stress & Anxiety' , 3, ['Eliminate Stress', 'reduce anxiety']],
        ['Sleep sounds - Relax Yoga Sleep Meditation' , 3, ['Eliminate Stress', 'Good Sleep/Insomnia', 'physical health']],
        ['Deep Meditation: Relaxation & Sleep Meditation App' , 2, ['Relaxation', 'empowerment / peace / zen / mindfulness']],
        ['Replika' , 2, ['reduce anxiety', 'build resilience / coping skills']],
        ['Moodpath - Depression & Anxiety Test' , 5, ['Eliminate Stress', 'reduce anxiety', 'tracking / monitor', 'assess mental health / state of mind']],
        ['Youper - Emotional Health' , 3, ['control / manage / maintain emotions', 'improve interpersonal relationships', 'tracking / monitor']],
        ['Anxiety & Panic Relief' , 3, ['Eliminate Stress', 'control / manage / maintain emotions']],
        ['Calm - Meditate Sleep Relax' , 1, ['Eliminate Stress']],
        ['Rootd - Panic Attack & Anxiety Relief' , 1, ['reduce anxiety']],
        ['Happy Being - Mindfulness wellness coach' , 4, ['Eliminate Stress', 'Good Sleep/Insomnia', 'reduce anxiety', 'happiness / well-being']],
        ['Moodrise by AeBeZe Labs' , 0, ['']],
        ['CBT-i Coach' , 1, ['Good Sleep/Insomnia']],
        ['Self-Esteem Blackboard' , 3, ['reduce anxiety', 'improve self-esteem / self-love / self-acceptance']],
        ['Self Hypnosis Audio Companion' , 4, ['Eliminate Stress', 'reduce anxiety', 'creativity', 'addiction']],
        ['Overcome Narcissism Self & Ego by Angie Atkinson' , 2, ['improve self-esteem / self-love / self-acceptance', 'improve interpersonal relationships']],
        ['30 Days Challenge - Zen life: Happy Smile and Fun' , 2, ['Relaxation', 'empowerment / peace / zen / mindfulness']],
        ['Get Self-Confidence! Hypnosis' , 3, ['Relaxation', 'improve self-esteem / self-love / self-acceptance', 'empowerment / peace / zen / mindfulness']],
        ['Positive Mindfulness Coach' , 0, ['']],
        ['Relax & Sleep Well: Hypnosis and Meditation' , 5, ['Eliminate Stress', 'Good Sleep/Insomnia', 'reduce anxiety', 'improve self-esteem / self-love / self-acceptance', 'addiction']],
        ['Primed Mind - Motivation Mindset & Life Coach' , 3, ['Relaxation', 'focus', 'improve self-esteem / self-love / self-acceptance']],
        ['Jealousy Test & CBT Self-Help' , 3, ['improve self-esteem / self-love / self-acceptance', 'improve interpersonal relationships', 'assess mental health / state of mind']],
        ['Self-help Anxiety Management' , 3, ['Relaxation', 'reduce anxiety', 'physical health']],
        ['Self Esteem Hypnosis' , 2, ['Relaxation', 'improve self-esteem / self-love / self-acceptance']],
        ['Stop Panic & Anxiety Self-Help' , 2, ['control / manage / maintain emotions', 'reduce anxiety']],
        ['MindShift CBT - Anxiety Canada' , 2, ['Relaxation', 'reduce anxiety']],
        ['Serenity: Guided Meditation & Mindfulness' , 4, ['Eliminate Stress', 'Good Sleep/Insomnia', 'happiness / well-being', 'empowerment / peace / zen / mindfulness']],
        ['Binaural Beats Therapy' , 1, ['happiness / well-being']],
        ['Heal And Transform Meditations' , 2, ['metaphysical benefits', 'empowerment / peace / zen / mindfulness']],
        ['DBT Travel Guide' , 1, ['control / manage / maintain emotions']],
        ['Quirk CBT (Cognitive Behavioral Therapy)' , 3, ['control / manage / maintain emotions', 'reduce anxiety']],
        ['Mindshine - Personal Training for the Mind' , 1, ['improve interpersonal relationships']],
        ['Mindworks Guided Meditation' , 5, ['Eliminate Stress', 'Good Sleep/Insomnia', 'reduce anxiety', 'happiness / well-being', 'focus']],
        ['Shine - Self-Care & Meditation' , 3, ['Good Sleep/Insomnia', 'improve self-esteem / self-love / self-acceptance', 'improve interpersonal relationships']],
        ['Relaxing Sounds Spa' , 4, ['Eliminate Stress', 'Relaxation', 'Good Sleep/Insomnia', 'control / manage / maintain emotions']],
        ['The Mindfulness App: relax calm focus and sleep' , 4, ['Relaxation', 'Good Sleep/Insomnia', 'focus', 'empowerment / peace / zen / mindfulness']],
        ['MoodSpace' , 1, ['empowerment / peace / zen / mindfulness']],
        ['EmoPaint – Paint your emotions!' , 2, ['control / manage / maintain emotions', 'physical health']],
        ['My Affirmations - Self Motivation' , 8, ['improve mood', 'happiness / well-being', 'motivation', 'focus', 'physical health', 'improve self-esteem / self-love / self-acceptance', 'improve interpersonal relationships', 'empowerment / peace / zen / mindfulness']],
        ['eMoods Bipolar Mood Tracker' , 3, ['control / manage / maintain emotions', 'improve mood', 'tracking / monitor']],
        ['I Meet Myself' , 2, ['control / manage / maintain emotions', 'improve self-esteem / self-love / self-acceptance']],
        ['eQuoo: Emotional Fitness Game' , 5, ['control / manage / maintain emotions', 'reduce anxiety', 'build resilience / coping skills', 'improve self-esteem / self-love / self-acceptance', 'improve interpersonal relationships']],
        ['Live Life: Guided Meditation & relaxation with CBT' , 8, ['Eliminate Stress', 'Relaxation', 'control / manage / maintain emotions', 'reduce anxiety', 'improve mood', 'happiness / well-being', 'physical health', 'empowerment / peace / zen / mindfulness']],
        ['Reflectly - Journal / Diary' , 1, ['Eliminate Stress']],
        ['Dbt911' , 2, ['control / manage / maintain emotions', 'improve interpersonal relationships']],
        ['Depression CBT Self-Help Guide' , 5, ['Eliminate Stress', 'Relaxation', 'control / manage / maintain emotions', 'improve mood']],
        ['Beat Depression' , 1, ['control / manage / maintain emotions']],
        ['#SelfCare' , 2, ['improve mood', 'happiness / well-being']],
        ['Anxiety Depression & Stress Relief Audio Courses' , 6, ['Eliminate Stress', 'control / manage / maintain emotions', 'reduce anxiety', 'improve mood', 'happiness / well-being']],
        ['PHQ-9 Depression module' , 2, ['assess mental health / state of mind']],
        ['Cognitive Behavioral Therapy: Depression & Anxiety' , 5, ['control / manage / maintain emotions', 'reduce anxiety', 'improve mood', 'focus']],
        ['FearTools - Anxiety Aid' , 1, ['reduce anxiety']],
        ['Anxiety Test' , 1, ['assess mental health / state of mind']],
        ['MoodMission - Cope with Stress Moods & Anxiety' , 5, ['Eliminate Stress', 'reduce anxiety', 'improve mood', 'build resilience / coping skills']],
        ['Atmosphere: Binaural Therapy Meditation' , 4, ['Eliminate Stress', 'Good Sleep/Insomnia', 'focus', 'metaphysical benefits']],
        ['Social Anxiety Test' , 2, ['reduce anxiety', 'assess mental health / state of mind']],
        ['Viridi' , 1, ['empowerment / peace / zen / mindfulness']],
        ['🎨Colorish - free mandala coloring book for adults' , 3, ['Relaxation', 'creativity', 'empowerment / peace / zen / mindfulness']],    
    ]
    var max = 0;
    appPromises.forEach(function(d) {;if (d[1] > max) {max = d[1]}});
    

    var colorScale = d3.scaleLinear()
    .domain([0, max])
    .range(['white', bluecol]);

    var xScale = d3.scaleLinear()
    .domain([0, 10])
    .range([svgDims.padding, svgDims.width - svgDims.padding * 4]);
    
    var yScale = d3.scaleLinear()
    .domain([0, 10])
    .range([0, svgDims.height - (svgDims.padding * 4)])
    
    

    // create legend
    var figure2Hover = d3.select('#fig2-appPromises-hover')

        .style('visibility', 'hidden')
        .style('position', 'relative')
        .style('text-align', 'center')
        .style('height', '2rem');


    // Figure 2 #fig2-appPromises
    // create group element in the svg to draw to. 
    figure2 = d3.select('#fig2-appPromises')
    .attr('width', svgDims.width)
    .attr('height', svgDims.height)
        .append('g')
        
    figure2txt = d3.select('#fig2-appPromises')
    .append('text')
        .attr('id', 'fig2-number')
        .text('42')
        .attr('x', xScale(0.25))
        .attr('y', yScale(10.5))
        .style('visibility', 'hidden')
        .style('fill', bluecol)
        .style('font-family', 'sans-serif')
        .style('font-weight', 'bold')
        .style('font-size', '.75rem')
        .style('text-align', 'center');

    // draw rects
    figure2.selectAll('rect')
        .data(appPromises)
        .enter()
        .append('rect')
        .attr('x', function(d, i) {
            return xScale(i%7);
        })
        .attr('y', function(d, i) {
            return yScale(Math.floor(i/7));
        })
        .attr('width', function(d) {
            return yScale(.95);
        })
        .attr('height', function(d, i) {
            return yScale(1);
        })
        .style('fill', function (d) {
            return colorScale(d[1])
        })
        .style('stroke', 'none')

        .on("mouseover", function(c, d) {
            var t = d[0] + " makes " + d[1] + " promises"
            figure2txt
                .html(t)
                .style('visibility', 'visible')
        })
        .on('mouseout', function(d) {
            figure2txt
                .style('visibility', 'hidden');
        })
}



window.onload = function() {
    fig1();
    fig2();
};