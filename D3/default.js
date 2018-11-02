const data = [{
        width: 200,
        height: 100,
        fill: 'purple'
    },
    {
        width: 100,
        height: 60,
        fill: 'pink'
    },
    {
        width: 50,
        height: 30,
        fill: 'red'
    }
]

const canvas = d3.select('.canvas')
const svg = canvas.select('svg') //return actually svg tag
    .attr('height', 600)
    .attr('width', 600)

const group = svg.append('g')
    .attr('transform', 'translate(0,10)')

svg.selectAll('rect')
    .data(data)
    .attr('height', (d, i, n) => d.height)
    .attr('width', (d) => d.width)
    .attr('fill', (d) => d.fill)
    .attr('x', 20)
    .attr('y', 20)

rects.enter().append('rect')
// group.append('circle')
//     .attr('r', 50)
//     .attr('fill', 'blue')
//     .attr('cx', 60)
//     .attr('cy', 150)

// svg.append('text')
//     .attr('x', 20)
//     .attr('y', 250)
//     .attr('fill', 'blue')
//     .text('D3 hellow')