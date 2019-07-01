import { Channel } from '@storybook/channels';
import { Addon } from '@storybook/addons';

export interface IDecoratorParams {
  default?: boolean;
  name: string;
  value: string;
}

export interface IDecoratorParamA11y {
  config: { [key: string]: any }; // this was empty, not sure what its type is
  options: { [key: string]: string };
}

export interface IHierarchyObj {
  hierarchyRootSeparator: string;
  hierarchySeparator: RegExp;
  theme?: { base: string; brandTitle: string };
}
export interface IDecoratorParamOptions extends Object {
  storySort: any;
  hierarchyRootSeparator: string;
  hierarchySeparator: RegExp;
  theme: {
    base: string;
    brandTitle: string;
  };
}

export interface IDecoratorBackgrounds {
  name: string;
  value: string;
  default?: true;
}

export interface IContext {
  id: string;
  kind: string;
  name: string;
  options: IDecoratorParamOptions;
  parameters: DecoratorParameters;
  story: string;
}

export interface DecoratorParameters {
  a11y: IDecoratorParamA11y;
  backgrounds: IDecoratorBackgrounds[];
  fileName?: string;
  globalParameter?: string;
  options?: IDecoratorParamOptions;
}

export type StoryFn = (p?: any) => any;
export interface Decorator {
  getDecorated: () => (args: any) => any;
  getOriginal: () => any;
  id: string;
  kind: string;
  name: string;
  parameters: DecoratorParameters;
  story: string;
  storyFn: StoryFn;
}

export type DecoratorData = { [K: string]: Decorator } & { [key: string]: Decorator };

export interface IModule {
  exports: any;
  id: string;
  loaded: boolean;
  webpackPolyfill: number;
  hot: any;
}

export interface ClientApi {
  add: (storyName: string, storyFn: () => any, parameters: any) => void;
  _addons: { [key: string]: any };
  addDecorator: (decorator: any) => any;
  addDecorators: (parameters: any) => any;
  kind: string;
}
export interface ClientApiParams {
  storyStore: StoryStore;
  decorateStory: (storyFn: any, decorators: any) => any;
}
export interface IStoryContext {
  kind: string;
  name: string;
  parameters: any;
}
export interface ICollection {
  [p: string]: any;
}
export interface IStory {
  props?: ICollection;
  moduleMetadata?: any;
  component?: any;
  template?: string;
}

export type IGetStory = (context: IStoryContext) => IStory;
export interface IApi {
  addDecorator: (decorator: any) => IApi;
  addParameters: (parameters: any) => IApi;
  add: (storyName: string, getStory: IGetStory, parameters?: any) => IApi;
  [key: string]: any;
}
export type HandlerFunction = (...args: any[]) => void;
export type DecoratorFunction = (args: any[]) => any[];

export interface LegacyItem {
  fileName: string;
  index: number;
  kind: string;
  stories: { [key: string]: any };
  revision?: number;
  selection?: { storyId: string };
}

export interface LegacyData {
  [K: string]: LegacyItem;
}
type _decorator = Partial<Decorator>;
export interface StoryStore {
  fromId: (id: string) => any;
  getSelection: (a: any, b: Error) => void;
  getRevision: () => number;
  incrementRevision: () => void;
  addLegacyStory: (p: DecoratorData) => void;
  pushToManager: () => void;
  addStory: (
    p: _decorator,
    cbObj: {
      applyDecorators: (storyFn: StoryFn, decorators: any) => any;
      getDecorators: () => any[];
    }
  ) => void;
  remove: (id: string) => void;
  setChannel: (channel: Channel) => void;
  setSelection: (ref: any, err: Error) => void;
  emit?: (...args: any) => void;
  raw?: () => [] | {};
  extract: () => {};
  getStoryWithContext: () => any;
  getStoryFileName: (kind: string) => null | string;
  getStories: (kind: string) => any[];
  getStoryKinds: () => string[];
  removeStoryKind: (kind: string) => void;
  hasStoryKind: (kind: string) => boolean;
  getStoryAndParameters: (
    kind: string,
    name: string
  ) => {
    story: any;
    parameters: any;
  };
  getStory: (kind: string, name: string) => any;
  hasStory: (kind: string, name: string) => boolean;
  size: () => number;
  clean: () => void;
  _error?: undefined;
  _channel: Channel;
  _data: DecoratorData;
  _events?: any;
  _eventsCount?: number;
  _legacyData?: LegacyData;
}

export interface IAddon extends Addon {
  apply: (a: IApi, b: any[]) => any;
}
