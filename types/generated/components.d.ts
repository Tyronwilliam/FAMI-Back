import type { Schema, Struct } from '@strapi/strapi';

export interface BlockContact extends Struct.ComponentSchema {
  collectionName: 'components_block_contacts';
  info: {
    displayName: 'Contact';
    icon: 'dashboard';
  };
  attributes: {
    content: Schema.Attribute.Component<'composant.libelle-item', true>;
    Gros_titre: Schema.Attribute.Component<'composant.texte', false>;
  };
}

export interface BlockEvenement extends Struct.ComponentSchema {
  collectionName: 'components_block_evenements';
  info: {
    displayName: 'Evenement';
    icon: 'dashboard';
  };
  attributes: {
    evenements: Schema.Attribute.Relation<
      'oneToMany',
      'api::evenement.evenement'
    >;
    Gros_Titre: Schema.Attribute.Component<'composant.texte', false>;
  };
}

export interface BlockGalerie extends Struct.ComponentSchema {
  collectionName: 'components_block_galeries';
  info: {
    displayName: 'Galerie';
    icon: 'apps';
  };
  attributes: {
    Gros_Titre: Schema.Attribute.Component<'composant.texte', false>;
    images_video: Schema.Attribute.Media<'images' | 'videos', true>;
  };
}

export interface BlockGenerique extends Struct.ComponentSchema {
  collectionName: 'components_block_generiques';
  info: {
    displayName: 'Generique';
    icon: 'dashboard';
  };
  attributes: {
    Gros_Titre: Schema.Attribute.Component<'composant.texte', false>;
    logo: Schema.Attribute.Media<'images'>;
    redirections: Schema.Attribute.Relation<
      'oneToMany',
      'api::redirection.redirection'
    >;
    remplacer_titre_par_logo: Schema.Attribute.Boolean;
    section: Schema.Attribute.String;
    sous_titre: Schema.Attribute.Component<'composant.texte', true>;
    video_en_fond: Schema.Attribute.Media<'videos'>;
  };
}

export interface BlockGeneriqueCard extends Struct.ComponentSchema {
  collectionName: 'components_block_generique_cards';
  info: {
    displayName: 'Generique_Card';
    icon: 'apps';
  };
  attributes: {
    cards: Schema.Attribute.Component<'composant.card', true>;
    Gros_Titre: Schema.Attribute.Component<'composant.texte', false>;
    redirections: Schema.Attribute.Relation<
      'oneToMany',
      'api::redirection.redirection'
    >;
    section: Schema.Attribute.String;
    sous_titre: Schema.Attribute.Component<'composant.texte', false>;
  };
}

export interface BlockGeneriqueComplexe extends Struct.ComponentSchema {
  collectionName: 'components_block_generique_complexes';
  info: {
    displayName: 'Generique_complexe';
    icon: 'dashboard';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    Gros_Titre: Schema.Attribute.Component<'composant.texte', false>;
    section: Schema.Attribute.String;
  };
}

export interface BlockListe extends Struct.ComponentSchema {
  collectionName: 'components_block_listes';
  info: {
    displayName: 'Liste';
    icon: 'dashboard';
  };
  attributes: {
    content: Schema.Attribute.Component<'composant.liste', true>;
    section: Schema.Attribute.String;
  };
}

export interface BlockNavigation extends Struct.ComponentSchema {
  collectionName: 'components_block_navigations';
  info: {
    displayName: 'Navigation';
    icon: 'dashboard';
  };
  attributes: {
    lien: Schema.Attribute.Component<'composant.navigation-lien', true>;
    logo: Schema.Attribute.Media<'images'>;
  };
}

export interface BlockQuiSommeNous extends Struct.ComponentSchema {
  collectionName: 'components_block_qui_somme_nous';
  info: {
    displayName: 'Text_image';
    icon: 'apps';
  };
  attributes: {
    content: Schema.Attribute.Component<'composant.texte-and-image', true>;
    Gros_Titre: Schema.Attribute.Component<'composant.texte', false>;
    section: Schema.Attribute.String;
  };
}

export interface ComposantCard extends Struct.ComponentSchema {
  collectionName: 'components_composant_cards';
  info: {
    displayName: 'card';
    icon: 'book';
  };
  attributes: {
    icone: Schema.Attribute.Enumeration<
      ['location', 'time', 'drink', 'forks', 'tiktok', 'instagram', 'facebook']
    >;
    sous_titre: Schema.Attribute.Component<'composant.texte', false>;
    titre: Schema.Attribute.Component<'composant.texte', false>;
  };
}

export interface ComposantFlexBlock extends Struct.ComponentSchema {
  collectionName: 'components_composant_flex_blocks';
  info: {
    displayName: 'flex_block';
    icon: 'apps';
  };
  attributes: {
    identifiant: Schema.Attribute.String;
    item: Schema.Attribute.Component<'composant.texte', true>;
    libelle: Schema.Attribute.Component<'composant.texte', false>;
  };
}

export interface ComposantLibelleItem extends Struct.ComponentSchema {
  collectionName: 'components_composant_libelle_items';
  info: {
    displayName: 'libelle_item';
    icon: 'archive';
  };
  attributes: {
    content: Schema.Attribute.Component<'composant.flex-block', true>;
    content_titre: Schema.Attribute.Component<'composant.texte', false>;
    identifiant: Schema.Attribute.String;
  };
}

export interface ComposantLien extends Struct.ComponentSchema {
  collectionName: 'components_composant_liens';
  info: {
    displayName: 'lien';
    icon: 'attachment';
  };
  attributes: {
    ajouter_image: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    icone: Schema.Attribute.Enumeration<
      ['location', 'time', 'drink', 'forks', 'tiktok', 'instagram', 'facebook']
    >;
    image: Schema.Attribute.Media<'images' | 'files'>;
    label: Schema.Attribute.String;
    url: Schema.Attribute.Text;
  };
}

export interface ComposantListe extends Struct.ComponentSchema {
  collectionName: 'components_composant_listes';
  info: {
    displayName: 'liste';
    icon: 'apps';
  };
  attributes: {
    ajouter_logo: Schema.Attribute.Boolean;
    ALERTE: Schema.Attribute.String &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<"Si redirection ne pas ajouter d'item">;
    identifiant: Schema.Attribute.String;
    item: Schema.Attribute.Component<'composant.texte', true>;
    logo: Schema.Attribute.Media<'images'>;
    redirections: Schema.Attribute.Relation<
      'oneToMany',
      'api::redirection.redirection'
    >;
    titre: Schema.Attribute.Component<'composant.texte', false>;
  };
}

export interface ComposantNavigationLien extends Struct.ComponentSchema {
  collectionName: 'components_composant_navigation_liens';
  info: {
    displayName: 'navigation_lien';
    icon: 'attachment';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface ComposantTexte extends Struct.ComponentSchema {
  collectionName: 'components_composant_textes';
  info: {
    displayName: 'texte';
    icon: 'apps';
  };
  attributes: {
    ajouter_icone: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    icone: Schema.Attribute.Enumeration<
      ['location', 'time', 'drink', 'forks', 'tiktok', 'instagram', 'facebook']
    >;
    label: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'p']
    >;
  };
}

export interface ComposantTexteAndImage extends Struct.ComponentSchema {
  collectionName: 'components_composant_texte_and_images';
  info: {
    displayName: 'texte_&_image';
    icon: 'dashboard';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'videos'>;
    texte: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'block.contact': BlockContact;
      'block.evenement': BlockEvenement;
      'block.galerie': BlockGalerie;
      'block.generique': BlockGenerique;
      'block.generique-card': BlockGeneriqueCard;
      'block.generique-complexe': BlockGeneriqueComplexe;
      'block.liste': BlockListe;
      'block.navigation': BlockNavigation;
      'block.qui-somme-nous': BlockQuiSommeNous;
      'composant.card': ComposantCard;
      'composant.flex-block': ComposantFlexBlock;
      'composant.libelle-item': ComposantLibelleItem;
      'composant.lien': ComposantLien;
      'composant.liste': ComposantListe;
      'composant.navigation-lien': ComposantNavigationLien;
      'composant.texte': ComposantTexte;
      'composant.texte-and-image': ComposantTexteAndImage;
    }
  }
}
