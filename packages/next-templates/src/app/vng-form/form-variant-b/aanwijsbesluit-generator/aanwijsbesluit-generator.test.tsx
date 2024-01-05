/**
 * @license EUPL-1.2
 * Copyright (c) 2024 Frameless B.V.
 */

import { render, screen } from '@testing-library/react';

const getData = require('../../../App.js');
const data = getData();

describe('Aanwijzingsbesluit variant B data', () => {
  it('has data', () => {
    expect(data).toBeDefined();
  });
  describe('Data from Article 2', () => {
    it('has domain', () => {
      expect(data.domain).toBeDefined();
    });
    it('has channel', () => {
      expect(data.channel).toBeDefined();
    });
    it('has messageTypes', () => {
      expect(data.messageTypes).toBeDefined();
    });
    it('has oneOrMoreArticles', () => {
      expect(data.oneOrMoreArticles).toBeDefined();
    });
  });

  it('Data from Article Kanaal bezwaartschriften en klachten exists', () => {
    it('has channel2', () => {
      expect(data.channel2).toBeDefined();
    });
    it('has oneOrMoreArticles2', () => {
      expect(data.oneOrMoreArticles2).toBeDefined();
    });
    it('has channel3', () => {
      expect(data.channel3).toBeDefined();
    });
    it('has oneOrMoreArticles3', () => {
      expect(data.oneOrMoreArticles3).toBeDefined();
    });
  });

  it('Data from Article Kanaal Omgevingswet en dienstenwet', () => {
    it('has oneOrMoreArticles4', () => {
      expect(data.oneOrMoreArticles4).toBeDefined();
    });
    it('has oneOrMoreArticles5', () => {
      expect(data.oneOrMoreArticles5).toBeDefined();
    });
  });
});
