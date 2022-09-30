---
slug: wd3r9k
title: 这是第二个demo
date: 2022-09-30T12:48:51.000Z
---

```javascript
import API, { getMaxAccess } from '../API';

global.fetch = jest.fn().mockRejectedValue(new Error('should not call fetch inside tests'));
jest.spyOn(console, 'log').mockImplementation(() => undefined);

describe('GitLab API', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

```
