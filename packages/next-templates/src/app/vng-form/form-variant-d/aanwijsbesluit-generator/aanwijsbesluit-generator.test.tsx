/**
 * @license EUPL-1.2
 * Copyright (c) 2024 Frameless B.V.
 */

import { render, screen } from '@testing-library/react';

const getData = require('../../../App.js');
const data = getData();

describe('Aanwijzingsbesluit variant D data', () => {
  it('has data', () => {
    expect(data).toBeDefined();
  });
  describe('Data from Article 2', () => {
    it('has messageTypes3', () => {
      expect(data.messageTypes3).toBeDefined();
    });
    it('has name1', () => {
      expect(data.name1).toBeDefined();
    });
    it('has messageTypes4', () => {
      expect(data.messageTypes4).toBeDefined();
    });
    it('has name2', () => {
      expect(data.name2).toBeDefined();
    });
    it('has messageTypes4', () => {
      expect(data.messageTypes4).toBeDefined();
    });
    it('has messageTypes4', () => {
      expect(data.messageTypes4).toBeDefined();
    });
  });

  describe('Data from Article 3', () => {
    it('has oneOrMoreArticles6', () => {
      expect(data.oneOrMoreArticles6).toBeDefined();
    });
  });

  describe('Data from Article Kanaal bezwaarschriften en klachten', () => {
    it('has channel5', () => {
      expect(data.channel5).toBeDefined();
    });
    it('has oneOrMoreArticles7', () => {
      expect(data.oneOrMoreArticles7).toBeDefined();
    });
    it('has channel6', () => {
      expect(data.channel6).toBeDefined();
    });
    it('has oneOrMoreArticles8', () => {
      expect(data.oneOrMoreArticles8).toBeDefined();
    });
  });

  describe('Data from Article Kanaal bezwaarschriften en klachten', () => {
    it('has oneOrMoreArticles9', () => {
      expect(data.oneOrMoreArticles9).toBeDefined();
    });
    it('has oneOrMoreArticles10', () => {
      expect(data.oneOrMoreArticles10).toBeDefined();
    });
  });
});
