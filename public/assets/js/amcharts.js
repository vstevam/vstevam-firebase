
am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_dark);
// Themes end

var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);
var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

chart.data = [
  {
    name: "Vinicius",
    children: [
      {
        name: "Languages",
        children: [
          {
          name: "Java",
          children: [
            { name: "Spring", value: 100 },
            { name: "JSF", value: 100 },
            { name: "Hibernate", value: 100 },
            { name: "JPA", value: 100 },
            {
              name: "UI",
              children: [
                { name: "PFaces", value: 100 }
              ]
            }
          ]
          },
          {
            name: "Test",
            children: [
              { name: "Jest", value: 100 },
              { name: "Postman", value: 100 },
              { name: "Mockito", value: 100 },
              { name: "JUnit", value: 100 }
            ]
            },
            {
              name: "PL/SQL",
              children: [
                { name: "Jasper", value: 100 }
              ]
              },
              {
                name: "JavaScript",
                children: [
                  { name: "Node.js", value: 100 },
                  { name: "Express", value: 100 },
                  { name: "Fastify", value: 100 },
                  { name: "Angular", value: 100 }
                ]
                },
        ]
      },
      {
        name: "Servers",
        children: [
          { name: "JBOSS", value: 80 },
          { name: "TomCat", value: 100 },
          { name: "Weblogic", value: 100 },
          {
            name: "Cloud",
            children: [
              { name: "AWS", value: 80 }
            ]
          }
        ],
        
      },
      {
        name: "Devops",
        children: [
          {
            name: "VCS",
            children: [
              { name: "SVN", value: 100 },
              { name: "GIT", value: 100 }
            ]
          },
          {
            name: "Container",
            children: [
              { name: "Docker", value: 100 },
              { name: "Helm", value: 100 },
              { name: "K8s", value: 100 }
            ]
          },
          {
            name: "CI/CD", 
            children: [
              { name: "Jenkins", value: 80 },
              { name: "GitLab", value: 80 }
            ]
          }
        ]
      },
      {
        name: "Agile",
        children: [
          { name: "Scrum", value: 100},
          { name: "Kanban", value: 100 }
        ]
      },
      {
        name: "DBs",
        children: [

              { name: "Oracle", value: 100 },
              { name: "Mysql", value: 80 },
              { name: "Mongo", value: 70 }

        ]
      }

    ]
  }
];

networkSeries.dataFields.value = "value";
networkSeries.dataFields.name = "name";
networkSeries.dataFields.children = "children";
networkSeries.nodes.template.tooltipText = "{name}:{value}";
networkSeries.nodes.template.fillOpacity = 1;
networkSeries.manyBodyStrength = -20;
networkSeries.links.template.strength = 0.8;
networkSeries.minRadius = am4core.percent(2);

networkSeries.nodes.template.label.text = "{name}"
networkSeries.fontSize = 13;

}); // end am4core.ready()

