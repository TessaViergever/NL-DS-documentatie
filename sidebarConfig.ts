import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  handboek: [
    {
      type: 'category',
      label: 'Handboek',
      collapsible: false,
      className: 'sidebar__main-category',
      link: {
        type: 'generated-index',
        title: 'Handboek',
        slug: 'handboek',
        keywords: ['Handboek', 'Meedoen', 'overzicht'],
      },
      items: [
        { type: 'doc', id: 'handboek/introductie' },
        { type: 'doc', id: 'handboek/estafettemodel' },
        { type: 'autogenerated', dirName: 'handboek/design-tokens' },
        {
          type: 'category',
          label: 'Voor designers',
          link: {
            type: 'generated-index',
            title: 'Voor designers',
            slug: '/handboek/designer/overzicht',
            keywords: ['designers', 'overzicht'],
          },
          items: [{ type: 'autogenerated', dirName: 'handboek/designer' }],
        },
        {
          type: 'category',
          label: 'Voor developers',
          link: {
            type: 'generated-index',
            title: 'Voor developers',
            slug: '/handboek/developer/overzicht',
            keywords: ['developer', 'overzicht'],
          },
          items: [{ type: 'autogenerated', dirName: 'handboek/developer' }],
        },
        {
          type: 'category',
          label: 'Voor organisaties',
          link: {
            type: 'generated-index',
            title: 'Voor organisaties',
            slug: '/handboek/organisatie/overzicht',
            keywords: ['organisaties', 'overzicht'],
          },
          items: [{ type: 'autogenerated', dirName: 'handboek/organisatie' }],
        },
        {
          type: 'category',
          label: 'Voor leveranciers',
          link: {
            type: 'generated-index',
            title: 'Overzicht',
            slug: '/handboek/leverancier/overzicht',
            keywords: ['leveranciers', 'overzicht'],
          },
          items: [{ type: 'autogenerated', dirName: 'handboek/leverancier' }],
        },
      ],
    },
  ],
  richtlijnen: [
    {
      type: 'category',
      label: 'Richtlijnen',
      collapsible: false,
      className: 'sidebar__main-category',
      link: {
        type: 'generated-index',
        title: 'Richtlijnen',
        slug: 'richtlijnen',
        keywords: ['Richtlijnen', 'overzicht'],
      },
      items: [
        { type: 'doc', id: 'richtlijnen/tekst-en-taalgebruik' },
        {
          type: 'category',
          label: 'Stijl',
          link: {
            type: 'generated-index',
            title: 'Stijl',
            slug: '/richtlijnen/stijl/overzicht',
            keywords: ['Stijl', 'overzicht'],
          },
          items: [{ type: 'autogenerated', dirName: 'richtlijnen/stijl' }],
        },
        {
          type: 'category',
          label: 'Formulieren',
          link: {
            type: 'generated-index',
            title: 'Formulieren',
            slug: '/richtlijnen/formulieren/overzicht',
            keywords: ['Formulieren', 'overzicht'],
          },
          items: [{ type: 'autogenerated', dirName: 'richtlijnen/formulieren' }],
        },
      ],
    },
  ],
  componenten: [
    {
      type: 'category',
      label: 'Componenten',
      collapsible: false,
      className: 'sidebar__main-category',
      items: [
        'componenten/README',
        'componenten/definition-of-done',
        {
          type: 'category',
          label: 'Componenten',
          collapsible: false,
          items: [{ type: 'autogenerated', dirName: 'componenten/build' }],
        },
      ],
    },
  ],
  voorbeelden: [
    {
      type: 'category',
      label: 'Voorbeelden',
      collapsible: false,
      className: 'sidebar__main-category',
      link: {
        type: 'generated-index',
        title: 'Voorbeelden',
        slug: 'voorbeelden',
        keywords: ['Voorbeelden', 'overzicht'],
      },
      items: [
        { type: 'doc', id: 'voorbeelden/README' },
        {
          type: 'category',
          label: 'Patronen',
          items: [{ type: 'autogenerated', dirName: 'voorbeelden/patronen' }],
        },
        {
          type: 'category',
          label: 'Templates',
          items: [{ type: 'autogenerated', dirName: 'voorbeelden/templates' }],
        },
      ],
    },
  ],
  onderzoek: [{ type: 'autogenerated', dirName: 'onderzoek' }],
  community: [
    {
      type: 'category',
      label: 'Community',
      collapsible: false,
      className: 'sidebar__main-category',
      link: {
        type: 'generated-index',
        title: 'Community',
        slug: 'community',
        keywords: ['Community', 'overzicht'],
      },
      items: [
        {
          type: 'category',
          label: 'Events',
          collapsible: true,
          link: {
            type: 'generated-index',
            title: 'Events',
            slug: '/community/events/overzicht',
          },
          items: [
            {
              type: 'category',
              label: 'Design Systems Week 2023',
              link: {
                type: 'generated-index',
                title: 'Design Systems Week 2023',
                slug: '/events/design-systems-week-2023/overzicht',
              },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'community/events/design-systems-week-2023',
                },
              ],
            },
            { type: 'doc', id: 'community/events/design-systems-week-2022' },
            {
              type: 'category',
              label: 'Heartbeat',
              link: {
                type: 'generated-index',
                title: 'Heartbeat',
                slug: '/events/heartbeat/overzicht',
              },
              items: [
                { type: 'doc', id: 'community/events/heartbeat/heartbeat' },
                { type: 'doc', id: 'community/events/heartbeat/videos' },
                { type: 'doc', id: 'community/events/heartbeat/aanmelden' },
              ],
            },
            {
              type: 'category',
              label: 'Design Open Hour',
              link: {
                type: 'generated-index',
                title: 'Design Open Hour',
                slug: '/events/design-open-hour/overzicht',
              },
              items: [
                { type: 'doc', id: 'community/events/design-open-hour/design-open-hour' },
                { type: 'doc', id: 'community/events/design-open-hour/aanmelden' },
              ],
            },
          ],
        },
        { type: 'doc', id: 'community/wie-doet-mee' },
      ],
    },
  ],
  project: [
    {
      type: 'category',
      label: 'Project',
      collapsible: false,
      className: 'sidebar__main-category',
      link: {
        type: 'generated-index',
        title: 'Project',
        slug: 'project',
        keywords: ['Project', 'overzicht'],
      },
      items: [
        { type: 'doc', id: 'project/over-nlds' },
        { type: 'doc', id: 'project/kernteam' },
        { type: 'doc', id: 'project/blijf-op-de-hoogte' },
        { type: 'doc', id: 'project/links' },
      ],
    },
  ],
};

export default sidebars;
