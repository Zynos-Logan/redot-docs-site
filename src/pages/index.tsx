import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type QuickLink = {
  title: string;
  description: string;
  to: string;
  cta: string;
};

const quickLinks: QuickLink[] = [
  {
    title: 'Start Learning',
    description: 'Learn the editor, scenes, nodes, scripting, and project workflow from the beginning.',
    to: '/docs/Getting Started/introduction/',
    cta: 'Open the guide',
  },
  {
    title: 'Class Reference',
    description: 'Search engine APIs, node properties, methods, signals, constants, and examples.',
    to: '/docs/Classes/',
    cta: 'Browse classes',
  },
  {
    title: 'Tutorials',
    description: 'Build practical knowledge across 2D, 3D, animation, rendering, scripting, UI, and export.',
    to: '/docs/category/tutorials',
    cta: 'Explore tutorials',
  },
  {
    title: 'Contribute',
    description: 'Improve the engine, docs, translations, examples, bug reports, and review workflow.',
    to: '/docs/Contributing/how_to_contribute',
    cta: 'Get involved',
  },
];

const featuredTopics = [
  {
    label: 'First 2D Game',
    to: '/docs/Getting Started/first_2d_game/',
  },
  {
    label: 'First 3D Game',
    to: '/docs/Getting Started/first_3d_game/',
  },
  {
    label: 'GDScript',
    to: '/docs/tutorials/scripting/gdscript/gdscript_basics',
  },
  {
    label: 'Exporting',
    to: '/docs/tutorials/export/',
  },
  {
    label: 'Editor Plugins',
    to: '/docs/tutorials/plugins/editor/',
  },
  {
    label: 'Engine Development',
    to: '/docs/Contributing/Development/',
  },
];

function QuickLinkCard({title, description, to, cta}: QuickLink) {
  return (
    <article className={styles.quickCard}>
      <Heading as="h2">{title}</Heading>
      <p>{description}</p>
      <Link className={styles.cardLink} to={to}>
        {cta}
      </Link>
    </article>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Redot Documentation"
      description="Official Redot Engine documentation, tutorials, class reference, and contribution guides.">
      <main className={styles.homepage}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <div className={styles.brandLockup}>
                <img className={styles.logo} src="/img/logo.svg" alt="" />
                <span>Redot Engine</span>
              </div>
              <Heading as="h1">Documentation</Heading>
              <p className={styles.lede}>
                Learn the engine, find API details quickly, and move from first scene to shipped project with the
                official Redot docs.
              </p>
              <div className={styles.heroActions}>
                <Link className={styles.primaryAction} to="/docs/Getting Started/introduction/">
                  Start Reading
                </Link>
                <Link className={styles.secondaryAction} to="/docs/Classes/">
                  Class Reference
                </Link>
              </div>
            </div>

            <div className={styles.heroMedia} aria-label="Redot editor interface preview">
              <img
                src="/Getting Started/introduction/img/editor_intro_workspace_3d.webp"
                alt="Redot editor showing a 3D workspace"
              />
            </div>
          </div>
        </section>

        <section className={styles.quickLinks} aria-labelledby="quick-links-heading">
          <div className={styles.sectionHeader}>
            <Heading as="h2" id="quick-links-heading">
              Find The Right Entry Point
            </Heading>
            <p>Jump straight to the material that matches what you are trying to do.</p>
          </div>
          <div className={styles.quickGrid}>
            {quickLinks.map((link) => (
              <QuickLinkCard key={link.title} {...link} />
            ))}
          </div>
        </section>

        <section className={styles.topicBand} aria-labelledby="topics-heading">
          <div>
            <Heading as="h2" id="topics-heading">
              Popular Topics
            </Heading>
            <p>Common routes through the documentation for building, scripting, extending, and shipping projects.</p>
          </div>
          <div className={styles.topicList}>
            {featuredTopics.map((topic) => (
              <Link key={topic.label} to={topic.to}>
                {topic.label}
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.referenceSection} aria-labelledby="reference-heading">
          <div className={styles.referenceImage}>
            <img
              src="/Getting Started/introduction/img/editor_intro_search_help.webp"
              alt="Redot editor help search panel"
            />
          </div>
          <div className={styles.referenceContent}>
            <Heading as="h2" id="reference-heading">
              Built For Fast Lookup
            </Heading>
            <p>
              The docs are organized around the way Redot is used day to day: guided learning for new projects,
              focused tutorials for specific systems, and a generated class reference for exact API details.
            </p>
            <div className={styles.referenceActions}>
              <Link to="/docs/Getting Started/step_by_step/nodes_and_scenes">Nodes and scenes</Link>
              <Link to="/docs/tutorials/scripting/">Scripting</Link>
              <Link to="/docs/tutorials/export/">Export workflow</Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
