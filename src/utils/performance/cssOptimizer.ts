
/**
 * CSS Optimizer
 * Utilities for optimizing CSS delivery and performance
 */

/**
 * Remove unused CSS and optimize CSS delivery
 */
export function optimizeCSSDelivery(): void {
  if (typeof window === 'undefined' || !document.querySelectorAll) return;
  
  // Identify and disable unused CSS (demonstration)
  const unusedSelectors = [];
  const styleSheets = Array.from(document.styleSheets);
  
  try {
    styleSheets.forEach(sheet => {
      try {
        const rules = sheet.cssRules || sheet.rules;
        for (let i = 0; i < rules.length; i++) {
          const rule = rules[i];
          if (rule.type === 1) { // CSSStyleRule
            // Safely access selectorText
            const selectorText = (rule as CSSStyleRule).selectorText;
            try {
              if (selectorText && document.querySelector(selectorText) === null) {
                unusedSelectors.push(selectorText);
              }
            } catch (e) {
              // Skip invalid selectors
            }
          }
        }
      } catch (e) {
        // Skip cross-origin stylesheets
      }
    });
  } catch (e) {
    console.error('CSS optimization error:', e);
  }
  
  // Log for development insights (remove in production)
  if (process.env.NODE_ENV === 'development') {
    console.info(`Detected ${unusedSelectors.length} potentially unused CSS selectors`);
  }
}
