import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/pm3-wiki/',
    component: ComponentCreator('/pm3-wiki/', 'b57'),
    routes: [
      {
        path: '/pm3-wiki/',
        component: ComponentCreator('/pm3-wiki/', '715'),
        routes: [
          {
            path: '/pm3-wiki/tags',
            component: ComponentCreator('/pm3-wiki/tags', '603'),
            exact: true
          },
          {
            path: '/pm3-wiki/tags/introduction',
            component: ComponentCreator('/pm3-wiki/tags/introduction', '55d'),
            exact: true
          },
          {
            path: '/pm3-wiki/tags/meeting-notes',
            component: ComponentCreator('/pm3-wiki/tags/meeting-notes', '982'),
            exact: true
          },
          {
            path: '/pm3-wiki/',
            component: ComponentCreator('/pm3-wiki/', '12b'),
            routes: [
              {
                path: '/pm3-wiki/meetingnotes',
                component: ComponentCreator('/pm3-wiki/meetingnotes', 'ab0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/pm3-wiki/',
                component: ComponentCreator('/pm3-wiki/', '9f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
