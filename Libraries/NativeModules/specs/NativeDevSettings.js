/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 */

import type {TurboModule} from '../../TurboModule/RCTExport';
import * as TurboModuleRegistry from '../../TurboModule/TurboModuleRegistry';

export interface Spec extends TurboModule {
  +reload: () => void;
  +reloadWithReason?: (reason: string) => void;
  +onFastRefresh?: () => void;
  +setHotLoadingEnabled: (isHotLoadingEnabled: boolean) => void;
  +setIsDebuggingRemotely: (isDebuggingRemotelyEnabled: boolean) => void;
  +setProfilingEnabled: (isProfilingEnabled: boolean) => void;
  +toggleElementInspector: () => void;
  +addMenuItem: (title: string) => void;

  // Events
  +addListener: (eventName: string) => void;
  +removeListeners: (count: number) => void;

  // iOS only.
  +setIsShakeToShowDevMenuEnabled: (enabled: boolean) => void;

  // [macOS
  // macOS only.
  +setIsSecondaryClickToShowDevMenuEnabled: (enabled: boolean) => void;
  // macOS]
}

export default (TurboModuleRegistry.getEnforcing<Spec>('DevSettings'): Spec);
