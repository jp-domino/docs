/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
  main: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started',
        'getting-started/architecture',
        'getting-started/install'
      ],
    },
    {
      type: 'category',
      label: 'Node Architecture',
      items: [
        'custom-nodes/custom-nodes',
        'custom-nodes/data-container',
        'custom-nodes/manifest',
        'custom-nodes/creating-custom-node',
        'custom-nodes/custom-category',
        'custom-nodes/contributing-nodes'
      ],
    },
   
   
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'tutorial/introduction', 
             ],
     },
   
    {
      type: 'category',
      label: 'Advanced Usage',
      items: [
        'api/smallmemory',
        {
          type: 'category',
          label: 'Active Feedback Control',
          items: [
            'api/active_feedback',
            'api/model_systems',
            'api/pid'
          ],
        },
      ]
    },
   
     {
        type: 'category',
          label: 'App demos',
           items:[
            
       {
        type: 'category',
          label: 'AI & ML',
           items:[
          {
          type: 'category',
          label: 'Object detection',
           items:['tutorial/AI_ML/Object_detection/YOLOv3'
                 ],
           },
                ]
        },   
       {
        type: 'category',
          label: 'Extractors',
           items:[
          {
          type: 'category',
          label: 'Files',
           items:['tutorial/Extractors/Files/Open_CSV'
                 ],
           },
                ]
        },
      {
        type: 'category',
          label: 'Generators',
           items:[
          {
          type: 'category',
          label: 'Simulation',
           items:['tutorial/Generators/Simulation/feedback'
                 ],
           },
                ]
        },
  ],
},
  ]   
};
module.exports = sidebars;
