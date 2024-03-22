/**
 * Arabic Sentiment Analysis
 *
 * Performing Arabic sentiment analysis using a statistical algorithm based on the log-odds model of the bi-radical roots.
 *
 * @author    Waleed El-sefy <waleedelsefy@gmail.com>
 * @copyright 2024, Waleed El-sefy
 * @license   LGPLv3
 * @version   2.0
 * @link      https://github.com/khaled-alshamaa/ar-php/blob/master/examples/ar_sentiment.js
 * @see       https://ar-php.org/github/examples/ar_sentiment.html
 */
 
var allStems = ["\u0621\u0621","\u0621\u0627","\u0621\u0628","\u0621\u062a","\u0621\u062b","\u0621\u062c","\u0621\u062d","\u0621\u062e","\u0621\u062f","\u0621\u0630","\u0621\u0631","\u0621\u0632","\u0621\u0633","\u0621\u0634","\u0621\u0635","\u0621\u0636","\u0621\u0637","\u0621\u0638","\u0621\u0639","\u0621\u063a","\u0621\u0641","\u0621\u0642","\u0621\u0643","\u0621\u0644","\u0621\u0645","\u0621\u0646","\u0621\u0647","\u0621\u0648","\u0621\u064a","\u0627\u0621","\u0627\u0627","\u0627\u0628","\u0627\u062a","\u0627\u062b","\u0627\u062c","\u0627\u062d","\u0627\u062e","\u0627\u062f","\u0627\u0630","\u0627\u0631","\u0627\u0632","\u0627\u0633","\u0627\u0634","\u0627\u0635","\u0627\u0636","\u0627\u0637","\u0627\u0638","\u0627\u0639","\u0627\u063a","\u0627\u0641","\u0627\u0642","\u0627\u0643","\u0627\u0644","\u0627\u0645","\u0627\u0646","\u0627\u0647","\u0627\u0648","\u0627\u064a","\u0628\u0621","\u0628\u0627","\u0628\u0628","\u0628\u062a","\u0628\u062b","\u0628\u062c","\u0628\u062d","\u0628\u062e","\u0628\u062f","\u0628\u0630","\u0628\u0631","\u0628\u0632","\u0628\u0633","\u0628\u0634","\u0628\u0635","\u0628\u0636","\u0628\u0637","\u0628\u0638","\u0628\u0639","\u0628\u063a","\u0628\u0641","\u0628\u0642","\u0628\u0643","\u0628\u0644","\u0628\u0645","\u0628\u0646","\u0628\u0647","\u0628\u0648","\u0628\u064a","\u062a\u0621","\u062a\u0627","\u062a\u0628","\u062a\u062a","\u062a\u062b","\u062a\u062c","\u062a\u062d","\u062a\u062e","\u062a\u062f","\u062a\u0630","\u062a\u0631","\u062a\u0632","\u062a\u0633","\u062a\u0634","\u062a\u0635","\u062a\u0636","\u062a\u0637","\u062a\u0638","\u062a\u0639","\u062a\u063a","\u062a\u0641","\u062a\u0642","\u062a\u0643","\u062a\u0644","\u062a\u0645","\u062a\u0646","\u062a\u0647","\u062a\u0648","\u062a\u064a","\u062b\u0621","\u062b\u0627","\u062b\u0628","\u062b\u062a","\u062b\u062b","\u062b\u062c","\u062b\u062d","\u062b\u062e","\u062b\u062f","\u062b\u0630","\u062b\u0631","\u062b\u0632","\u062b\u0633","\u062b\u0634","\u062b\u0635","\u062b\u0636","\u062b\u0637","\u062b\u0638","\u062b\u0639","\u062b\u063a","\u062b\u0641","\u062b\u0642","\u062b\u0643","\u062b\u0644","\u062b\u0645","\u062b\u0646","\u062b\u0647","\u062b\u0648","\u062b\u064a","\u062c\u0621","\u062c\u0627","\u062c\u0628","\u062c\u062a","\u062c\u062b","\u062c\u062c","\u062c\u062d","\u062c\u062e","\u062c\u062f","\u062c\u0630","\u062c\u0631","\u062c\u0632","\u062c\u0633","\u062c\u0634","\u062c\u0635","\u062c\u0636","\u062c\u0637","\u062c\u0638","\u062c\u0639","\u062c\u063a","\u062c\u0641","\u062c\u0642","\u062c\u0643","\u062c\u0644","\u062c\u0645","\u062c\u0646","\u062c\u0647","\u062c\u0648","\u062c\u064a","\u062d\u0621","\u062d\u0627","\u062d\u0628","\u062d\u062a","\u062d\u062b","\u062d\u062c","\u062d\u062d","\u062d\u062e","\u062d\u062f","\u062d\u0630","\u062d\u0631","\u062d\u0632","\u062d\u0633","\u062d\u0634","\u062d\u0635","\u062d\u0636","\u062d\u0637","\u062d\u0638","\u062d\u0639","\u062d\u063a","\u062d\u0641","\u062d\u0642","\u062d\u0643","\u062d\u0644","\u062d\u0645","\u062d\u0646","\u062d\u0647","\u062d\u0648","\u062d\u064a","\u062e\u0621","\u062e\u0627","\u062e\u0628","\u062e\u062a","\u062e\u062b","\u062e\u062c","\u062e\u062d","\u062e\u062e","\u062e\u062f","\u062e\u0630","\u062e\u0631","\u062e\u0632","\u062e\u0633","\u062e\u0634","\u062e\u0635","\u062e\u0636","\u062e\u0637","\u062e\u0638","\u062e\u0639","\u062e\u063a","\u062e\u0641","\u062e\u0642","\u062e\u0643","\u062e\u0644","\u062e\u0645","\u062e\u0646","\u062e\u0647","\u062e\u0648","\u062e\u064a","\u062f\u0621","\u062f\u0627","\u062f\u0628","\u062f\u062a","\u062f\u062b","\u062f\u062c","\u062f\u062d","\u062f\u062e","\u062f\u062f","\u062f\u0630","\u062f\u0631","\u062f\u0632","\u062f\u0633","\u062f\u0634","\u062f\u0635","\u062f\u0636","\u062f\u0637","\u062f\u0638","\u062f\u0639","\u062f\u063a","\u062f\u0641","\u062f\u0642","\u062f\u0643","\u062f\u0644","\u062f\u0645","\u062f\u0646","\u062f\u0647","\u062f\u0648","\u062f\u064a","\u0630\u0621","\u0630\u0627","\u0630\u0628","\u0630\u062a","\u0630\u062b","\u0630\u062c","\u0630\u062d","\u0630\u062e","\u0630\u062f","\u0630\u0630","\u0630\u0631","\u0630\u0632","\u0630\u0633","\u0630\u0634","\u0630\u0635","\u0630\u0636","\u0630\u0637","\u0630\u0638","\u0630\u0639","\u0630\u063a","\u0630\u0641","\u0630\u0642","\u0630\u0643","\u0630\u0644","\u0630\u0645","\u0630\u0646","\u0630\u0647","\u0630\u0648","\u0630\u064a","\u0631\u0621","\u0631\u0627","\u0631\u0628","\u0631\u062a","\u0631\u062b","\u0631\u062c","\u0631\u062d","\u0631\u062e","\u0631\u062f","\u0631\u0630","\u0631\u0631","\u0631\u0632","\u0631\u0633","\u0631\u0634","\u0631\u0635","\u0631\u0636","\u0631\u0637","\u0631\u0638","\u0631\u0639","\u0631\u063a","\u0631\u0641","\u0631\u0642","\u0631\u0643","\u0631\u0644","\u0631\u0645","\u0631\u0646","\u0631\u0647","\u0631\u0648","\u0631\u064a","\u0632\u0621","\u0632\u0627","\u0632\u0628","\u0632\u062a","\u0632\u062b","\u0632\u062c","\u0632\u062d","\u0632\u062e","\u0632\u062f","\u0632\u0630","\u0632\u0631","\u0632\u0632","\u0632\u0633","\u0632\u0634","\u0632\u0635","\u0632\u0636","\u0632\u0637","\u0632\u0638","\u0632\u0639","\u0632\u063a","\u0632\u0641","\u0632\u0642","\u0632\u0643","\u0632\u0644","\u0632\u0645","\u0632\u0646","\u0632\u0647","\u0632\u0648","\u0632\u064a","\u0633\u0621","\u0633\u0627","\u0633\u0628","\u0633\u062a","\u0633\u062b","\u0633\u062c","\u0633\u062d","\u0633\u062e","\u0633\u062f","\u0633\u0630","\u0633\u0631","\u0633\u0632","\u0633\u0633","\u0633\u0634","\u0633\u0635","\u0633\u0636","\u0633\u0637","\u0633\u0638","\u0633\u0639","\u0633\u063a","\u0633\u0641","\u0633\u0642","\u0633\u0643","\u0633\u0644","\u0633\u0645","\u0633\u0646","\u0633\u0647","\u0633\u0648","\u0633\u064a","\u0634\u0621","\u0634\u0627","\u0634\u0628","\u0634\u062a","\u0634\u062b","\u0634\u062c","\u0634\u062d","\u0634\u062e","\u0634\u062f","\u0634\u0630","\u0634\u0631","\u0634\u0632","\u0634\u0633","\u0634\u0634","\u0634\u0635","\u0634\u0636","\u0634\u0637","\u0634\u0638","\u0634\u0639","\u0634\u063a","\u0634\u0641","\u0634\u0642","\u0634\u0643","\u0634\u0644","\u0634\u0645","\u0634\u0646","\u0634\u0647","\u0634\u0648","\u0634\u064a","\u0635\u0621","\u0635\u0627","\u0635\u0628","\u0635\u062a","\u0635\u062b","\u0635\u062c","\u0635\u062d","\u0635\u062e","\u0635\u062f","\u0635\u0630","\u0635\u0631","\u0635\u0632","\u0635\u0633","\u0635\u0634","\u0635\u0635","\u0635\u0636","\u0635\u0637","\u0635\u0638","\u0635\u0639","\u0635\u063a","\u0635\u0641","\u0635\u0642","\u0635\u0643","\u0635\u0644","\u0635\u0645","\u0635\u0646","\u0635\u0647","\u0635\u0648","\u0635\u064a","\u0636\u0621","\u0636\u0627","\u0636\u0628","\u0636\u062a","\u0636\u062b","\u0636\u062c","\u0636\u062d","\u0636\u062e","\u0636\u062f","\u0636\u0630","\u0636\u0631","\u0636\u0632","\u0636\u0633","\u0636\u0634","\u0636\u0635","\u0636\u0636","\u0636\u0637","\u0636\u0638","\u0636\u0639","\u0636\u063a","\u0636\u0641","\u0636\u0642","\u0636\u0643","\u0636\u0644","\u0636\u0645","\u0636\u0646","\u0636\u0647","\u0636\u0648","\u0636\u064a","\u0637\u0621","\u0637\u0627","\u0637\u0628","\u0637\u062a","\u0637\u062b","\u0637\u062c","\u0637\u062d","\u0637\u062e","\u0637\u062f","\u0637\u0630","\u0637\u0631","\u0637\u0632","\u0637\u0633","\u0637\u0634","\u0637\u0635","\u0637\u0636","\u0637\u0637","\u0637\u0638","\u0637\u0639","\u0637\u063a","\u0637\u0641","\u0637\u0642","\u0637\u0643","\u0637\u0644","\u0637\u0645","\u0637\u0646","\u0637\u0647","\u0637\u0648","\u0637\u064a","\u0638\u0621","\u0638\u0627","\u0638\u0628","\u0638\u062a","\u0638\u062b","\u0638\u062c","\u0638\u062d","\u0638\u062e","\u0638\u062f","\u0638\u0630","\u0638\u0631","\u0638\u0632","\u0638\u0633","\u0638\u0634","\u0638\u0635","\u0638\u0636","\u0638\u0637","\u0638\u0638","\u0638\u0639","\u0638\u063a","\u0638\u0641","\u0638\u0642","\u0638\u0643","\u0638\u0644","\u0638\u0645","\u0638\u0646","\u0638\u0647","\u0638\u0648","\u0638\u064a","\u0639\u0621","\u0639\u0627","\u0639\u0628","\u0639\u062a","\u0639\u062b","\u0639\u062c","\u0639\u062d","\u0639\u062e","\u0639\u062f","\u0639\u0630","\u0639\u0631","\u0639\u0632","\u0639\u0633","\u0639\u0634","\u0639\u0635","\u0639\u0636","\u0639\u0637","\u0639\u0638","\u0639\u0639","\u0639\u063a","\u0639\u0641","\u0639\u0642","\u0639\u0643","\u0639\u0644","\u0639\u0645","\u0639\u0646","\u0639\u0647","\u0639\u0648","\u0639\u064a","\u063a\u0621","\u063a\u0627","\u063a\u0628","\u063a\u062a","\u063a\u062b","\u063a\u062c","\u063a\u062d","\u063a\u062e","\u063a\u062f","\u063a\u0630","\u063a\u0631","\u063a\u0632","\u063a\u0633","\u063a\u0634","\u063a\u0635","\u063a\u0636","\u063a\u0637","\u063a\u0638","\u063a\u0639","\u063a\u063a","\u063a\u0641","\u063a\u0642","\u063a\u0643","\u063a\u0644","\u063a\u0645","\u063a\u0646","\u063a\u0647","\u063a\u0648","\u063a\u064a","\u0641\u0621","\u0641\u0627","\u0641\u0628","\u0641\u062a","\u0641\u062b","\u0641\u062c","\u0641\u062d","\u0641\u062e","\u0641\u062f","\u0641\u0630","\u0641\u0631","\u0641\u0632","\u0641\u0633","\u0641\u0634","\u0641\u0635","\u0641\u0636","\u0641\u0637","\u0641\u0638","\u0641\u0639","\u0641\u063a","\u0641\u0641","\u0641\u0642","\u0641\u0643","\u0641\u0644","\u0641\u0645","\u0641\u0646","\u0641\u0647","\u0641\u0648","\u0641\u064a","\u0642\u0621","\u0642\u0627","\u0642\u0628","\u0642\u062a","\u0642\u062b","\u0642\u062c","\u0642\u062d","\u0642\u062e","\u0642\u062f","\u0642\u0630","\u0642\u0631","\u0642\u0632","\u0642\u0633","\u0642\u0634","\u0642\u0635","\u0642\u0636","\u0642\u0637","\u0642\u0638","\u0642\u0639","\u0642\u063a","\u0642\u0641","\u0642\u0642","\u0642\u0643","\u0642\u0644","\u0642\u0645","\u0642\u0646","\u0642\u0647","\u0642\u0648","\u0642\u064a","\u0643\u0621","\u0643\u0627","\u0643\u0628","\u0643\u062a","\u0643\u062b","\u0643\u062c","\u0643\u062d","\u0643\u062e","\u0643\u062f","\u0643\u0630","\u0643\u0631","\u0643\u0632","\u0643\u0633","\u0643\u0634","\u0643\u0635","\u0643\u0636","\u0643\u0637","\u0643\u0638","\u0643\u0639","\u0643\u063a","\u0643\u0641","\u0643\u0642","\u0643\u0643","\u0643\u0644","\u0643\u0645","\u0643\u0646","\u0643\u0647","\u0643\u0648","\u0643\u064a","\u0644\u0621","\u0644\u0627","\u0644\u0628","\u0644\u062a","\u0644\u062b","\u0644\u062c","\u0644\u062d","\u0644\u062e","\u0644\u062f","\u0644\u0630","\u0644\u0631","\u0644\u0632","\u0644\u0633","\u0644\u0634","\u0644\u0635","\u0644\u0636","\u0644\u0637","\u0644\u0638","\u0644\u0639","\u0644\u063a","\u0644\u0641","\u0644\u0642","\u0644\u0643","\u0644\u0644","\u0644\u0645","\u0644\u0646","\u0644\u0647","\u0644\u0648","\u0644\u064a","\u0645\u0621","\u0645\u0627","\u0645\u0628","\u0645\u062a","\u0645\u062b","\u0645\u062c","\u0645\u062d","\u0645\u062e","\u0645\u062f","\u0645\u0630","\u0645\u0631","\u0645\u0632","\u0645\u0633","\u0645\u0634","\u0645\u0635","\u0645\u0636","\u0645\u0637","\u0645\u0638","\u0645\u0639","\u0645\u063a","\u0645\u0641","\u0645\u0642","\u0645\u0643","\u0645\u0644","\u0645\u0645","\u0645\u0646","\u0645\u0647","\u0645\u0648","\u0645\u064a","\u0646\u0621","\u0646\u0627","\u0646\u0628","\u0646\u062a","\u0646\u062b","\u0646\u062c","\u0646\u062d","\u0646\u062e","\u0646\u062f","\u0646\u0630","\u0646\u0631","\u0646\u0632","\u0646\u0633","\u0646\u0634","\u0646\u0635","\u0646\u0636","\u0646\u0637","\u0646\u0638","\u0646\u0639","\u0646\u063a","\u0646\u0641","\u0646\u0642","\u0646\u0643","\u0646\u0644","\u0646\u0645","\u0646\u0646","\u0646\u0647","\u0646\u0648","\u0646\u064a","\u0647\u0621","\u0647\u0627","\u0647\u0628","\u0647\u062a","\u0647\u062b","\u0647\u062c","\u0647\u062d","\u0647\u062e","\u0647\u062f","\u0647\u0630","\u0647\u0631","\u0647\u0632","\u0647\u0633","\u0647\u0634","\u0647\u0635","\u0647\u0636","\u0647\u0637","\u0647\u0638","\u0647\u0639","\u0647\u063a","\u0647\u0641","\u0647\u0642","\u0647\u0643","\u0647\u0644","\u0647\u0645","\u0647\u0646","\u0647\u0647","\u0647\u0648","\u0647\u064a","\u0648\u0621","\u0648\u0627","\u0648\u0628","\u0648\u062a","\u0648\u062b","\u0648\u062c","\u0648\u062d","\u0648\u062e","\u0648\u062f","\u0648\u0630","\u0648\u0631","\u0648\u0632","\u0648\u0633","\u0648\u0634","\u0648\u0635","\u0648\u0636","\u0648\u0637","\u0648\u0638","\u0648\u0639","\u0648\u063a","\u0648\u0641","\u0648\u0642","\u0648\u0643","\u0648\u0644","\u0648\u0645","\u0648\u0646","\u0648\u0647","\u0648\u0648","\u0648\u064a","\u064a\u0621","\u064a\u0627","\u064a\u0628","\u064a\u062a","\u064a\u062b","\u064a\u062c","\u064a\u062d","\u064a\u062e","\u064a\u062f","\u064a\u0630","\u064a\u0631","\u064a\u0632","\u064a\u0633","\u064a\u0634","\u064a\u0635","\u064a\u0636","\u064a\u0637","\u064a\u0638","\u064a\u0639","\u064a\u063a","\u064a\u0641","\u064a\u0642","\u064a\u0643","\u064a\u0644","\u064a\u0645","\u064a\u0646","\u064a\u0647","\u064a\u0648","\u064a\u064a"];
var logOddStem = [-3.904,-0.775,-2.919,-1.35,-3.936,-4.565,-2.513,-4.283,-2.405,-4.535,-2.363,-3.889,-2.658,-4.695,-5.46,-6.034,-4.971,-6.33,-1.279,-6.42,-2.667,-2.946,-3.14,-1.106,-1.701,-1.997,0.068,-3.016,-0.974,1.088,2.932,1.861,2.267,0.343,0.973,1.36,0.774,1.658,0.019,2.279,0.238,1.541,0.545,0.683,0.131,0.545,-0.505,1.606,0.125,1.469,1.522,1.363,3.285,2.178,2.383,2.619,1.851,2.495,-0.942,1.689,-0.119,0.558,-1.47,-1.162,-0.372,-1.579,0.501,-1.743,0.693,-2.149,0.01,-0.793,-1.297,-0.744,-0.56,-2.956,0.453,-1.156,-0.864,-0.182,-0.131,1.05,0.04,0.691,1.439,0.149,1.185,-1.402,1.841,1.084,0.546,-1.31,-0.197,0.004,-0.625,0.208,-1.717,1.053,-0.792,-0.341,-0.728,-0.591,-1.458,-0.879,-1.728,0.572,-1.553,0.277,0.463,0.209,0.887,0.734,0.671,1.325,0.567,1.381,-2.332,-0.232,-2.934,-2.135,-1.776,-4.21,-7.279,-7.644,-5.972,-7.867,-0.118,-8.09,-6.819,-6.658,-8.029,-8.378,-6.971,-8.665,-6.267,-5.382,-2.903,-2.327,-4.652,-1.008,-1.759,-1.216,-0.694,-2.138,-0.396,-1.282,0.856,-0.163,-0.349,-4.519,-3.213,-2.199,-5.757,0.765,-3.023,-0.565,-0.848,-1.797,-3.354,-5.935,-6.153,-5.433,-5.935,-0.402,-5.228,-3.262,-4.944,-2.486,0.027,0.182,-0.116,0.65,-0.256,0.589,-2.561,1.092,-0.326,0.351,-0.404,-0.86,-3.216,-6.05,0.253,-3.439,-0.228,-1.595,-0.881,-2.342,-2.24,-2.22,-2.607,-1.788,-4.834,-6.658,-1.617,-0.641,-0.767,0.009,0.083,-0.323,0.887,-0.193,0.635,-2.602,0.485,-1.547,-0.328,-5.478,-1.692,-6.228,-5.386,-0.854,-2.2,0.033,-3.581,-2.396,-3.57,-0.302,-3.401,-1.486,-6.493,-3.278,-6.931,-0.96,-2.301,-3.097,-0.023,-0.693,-1.297,0.071,-0.906,0.098,-1.179,1.225,-1.629,-0.226,-0.757,-2.099,-3.219,-1.338,-0.785,-5.98,-0.052,-4.157,-1.838,-2.523,-5.051,-5.769,-4.387,-5.615,-1.143,-4.041,-1.617,-0.218,-1.522,-0.572,0.276,-0.143,1.036,0.016,0.73,-3.59,0.22,-1.687,-1.583,-7.867,-3.627,-4.982,-6.034,-6.144,-3.576,-1.272,-8.56,-7.101,-6.931,-8.378,-8.665,-7.684,-8.783,-4.296,-7.867,-4.601,-3.79,-0.575,-0.983,-4.007,-1.792,-0.417,-2.411,-0.681,0.073,1.781,0.307,0.631,-3.182,-0.518,-0.298,-1.723,-0.401,-5.214,-0.814,-2.004,-0.836,-1.785,-2.523,-0.735,-2.001,-5.39,-0.195,-1.43,0.164,-0.386,-0.633,-0.755,0.015,-0.044,1.849,0.712,1.448,-1.593,-0.323,-3.025,-1.67,-6.892,-1.481,-3.213,-4.837,-1.87,-7.727,-1.891,-2.787,-5.119,-5.464,-6.802,-7.461,-5.893,-6.911,-1.917,-5.116,-3.467,-3.188,-3.437,-1.36,-1.332,-1.119,-0.599,-1.484,-0.622,-0.449,1.204,0.232,0.738,-2.771,-1.593,-0.8,-1.643,-0.426,-2.978,0.284,-3.351,-1.067,-2.739,-3.931,-3.713,-0.641,-4.017,-0.055,-2.76,-0.844,-0.464,-1.012,0.408,0.059,0.185,0.893,0.121,0.875,-0.805,0.294,-1.273,-0.739,-5.845,-3.169,-2.848,-0.929,-1.355,-4.309,-0.03,-4.678,-3.565,-3.211,-1.022,-7.174,-2.456,-6.33,-0.75,-3.05,-1.517,-1.329,-0.703,-0.87,-2.162,-1.213,0.116,-0.892,0.26,-2.841,0.269,-1.019,-0.636,-7.307,-6.042,-0.406,-3.726,-1.001,-8.09,-0.099,-7.078,-6.19,-4.974,-1.52,-7.366,-2.979,-7.336,-1.656,-1.949,-0.611,-1.92,-3.479,-0.26,-1.99,-1.337,0.351,-0.616,0.078,-2.486,-0.458,-2.625,-1.998,-7.972,-3.685,-1.757,-4.58,-3.58,-8.783,-1.69,-7.972,-6.614,-5.61,-7.366,-4.803,-2.984,-8.298,-0.84,-4.522,-1.229,-2.895,-2.789,-1.588,-2.343,-2.08,-0.657,-1.47,-0.498,-1.979,0.182,-0.724,-1.347,-7.252,-4.864,-2.331,-3.545,-3.696,-7.727,-0.354,-4.668,-4.038,-4.364,-6.911,-7.336,-3.378,-6.752,-0.65,-4.175,-1.259,-0.669,-3.67,-0.312,-1.191,-1.224,-0.014,-0.931,-0.172,-5.042,-0.831,-4.303,-2.286,-8.223,-6.911,-6.643,-6.931,-5.806,-8.56,-0.969,-7.867,-6.319,-6.493,-7.684,-7.771,-4.58,-5.852,-4.601,-7.279,-0.718,-5.721,-4.81,-2.199,-1.569,-1.913,-0.619,-2.636,-1.112,-1.671,1.548,0.156,0.14,-3.062,-0.718,-4.607,-5.446,0.651,-2.806,0.462,-1.801,-2.165,-0.945,-2.104,-0.818,-1.806,-2.326,-3.926,-5.935,-0.541,-0.499,-1.403,1.184,0.764,0.889,1.152,-0.194,1.004,-3.039,-0.485,-1.149,-1.803,-4.636,-5.675,-6.058,-6.719,-2.761,-5.107,0.341,-2.912,-3.053,-4.889,-3.855,-2.641,-2.909,-5.374,-5.349,-5.306,-0.632,-2.973,-4.069,-1.203,-1.382,-1.912,-0.139,-2.153,0.041,-1.943,1.1,-2.232,-0.005,-4.17,-1.985,-1.09,-2.822,-0.061,-2.655,0.333,-2.324,-0.389,-1.717,-1.32,-1.156,-0.95,-2.227,-0.732,-3.108,-1.604,0.192,-0.514,0.25,-0.684,0.237,1.184,-0.424,1.507,-0.583,1.109,0.09,0.223,-6.444,-5.386,-3.289,-5.781,0.116,-3.537,0.481,-3.925,-1.833,-2.566,-0.619,-2.181,-0.999,-4.168,-0.384,-6.444,-1.095,-1.239,-2.655,0.502,-0.096,-0.736,1.052,-0.282,0.54,-2.404,1.464,0.672,1.038,-0.467,-3.079,-3.495,-4.439,-1.289,-1.955,0.76,-2.68,-1.517,-2.075,-4.158,-4.844,-4.404,-5.416,-2.769,-4.486,-0.846,-3.076,-1.52,0.559,0.09,1.148,0.672,-0.167,0.55,0.404,2.928,1.552,1.848,-0.167,0.602,0.996,0.325,1.293,-0.221,1.918,-0.206,1.303,0.311,0.44,-0.398,0.328,-0.594,1.217,0.152,1.296,1.317,1.42,1.845,2.104,1.794,2.36,1.715,2.337,-0.796,2.058,0.098,1.166,-1.136,-0.196,-0.035,-0.982,0.317,-1.466,0.974,-0.552,0.155,-0.149,-0.839,-0.778,-0.616,-1.206,0.996,-1.472,0.175,0.355,0.189,1.272,0.798,1.702,1.714,0.996,1.208,-1.107,1.678,-0.496,0.533,-3.095,-0.703,-0.916,-2.803,0.191,-2.134,-0.225,-1.653,0.175,-1.358,-0.927,-2.379,-1.442,-0.492,-0.66,-3.064,0.054,0.111,-0.705,-0.655,-0.043,-0.056,1.366,-0.06,1.161,-1.566,1.608,-1.507,-0.811,-4.813,-2.363,-3.852,-4.376,-0.807,-0.052,-0.819,-2.672,-3.075,-2.423,-4.428,-3.825,-3.948,-5.069,-3.295,-4.996,-2.322,-2.585,-1.323,-0.721,0.254,-0.683,0.281,-0.084,0.076,-0.654,2.123,0.406,0.988,-1.618,0.207,0.145,-0.973,0.752,-1.304,0.939,-1.239,0.048,-0.903,-0.398,-0.676,-0.757,-1.159,0.698,-1.495,0.462,0.6,0.183,1.57,0.873,1.188,1.673,0.383,1.524,-0.386,1.62,0.261,0.902,-1.143,-0.356,-0.226,-1.015,0.703,-2.123,1.117,-1.056,0.015,-0.947,-1.337,-1.181,-1.112,-2.528,0.167,-2.098,0.14,0.299,0.048,0.746,0.626,1.263,2.114,0.516,0.575];
var logOdd = [0.277,0.037,-0.106,0.019,0.459,-0.016,-0.828,-0.11,-0.022,0.155,0.184,-0.466,0.018,0.304,0.133,-0.267,-0.306,0.097,1.713,-0.919,-0.192,0.464,0.292,0.192,0.26,0.101,-0.062,0.098,0.163,0.201,0.009,-0.042,-0.016,0.061,-0.019,0.051,0.002,-0.001,0.107,0.018,0.14,0.017,-0.006,-0.018,-0.078,0.03,0.075,0.174,-0.237,-0.097,0.022,-0.049,-0,0.05,0.019,-0.006,-0.03,-0.003,0.044,-0.07,-0.1,-0.068,0.005,-0.054,0.042,-0.054,-0.01,-0.118,0.023,-0.03,-0.136,-0.06,-0.085,-0.161,-0.107,-0.131,-0.065,-0.328,-0.069,-0.018,-0.057,-0.103,-0.025,0.009,-0.027,-0.071,-0,0.546,0.05,-0.118,0.016,0.494,0.013,0.14,0.025,-0.009,0.067,0.021,0.607,0.096,-0.098,-0.022,-0.098,0.033,-0.124,0.128,-0.089,-0.012,-0.019,0.056,0.012,0.064,0.11,0.018,-0.048,0.016,1.074,0.062,0.185,0.115,-0.406,-0.303,0.309,0.665,0.205,0.378,0.06,-0.251,0.026,-0.251,-0.433,-1.532,0.041,-0.028,0.461,0.071,0.145,0.141,0.562,-0.135,0.084,0.323,0.049,0.306,0.121,-0.053,0.014,0.104,-0.112,0.333,-0.115,0.225,-0.118,0.035,0.138,0.045,-0.231,-0.116,-0.369,-0.433,-0.244,-0.161,-0.117,0.226,0.305,0.191,0.089,0.379,0.308,0.149,0.106,-0.07,0.027,0.292,0.103,0.006,0.103,-0.053,-0.025,-0.351,-0.029,-0.279,-0.082,-0.125,0.094,-0.209,-0.005,-0.853,-0.033,-0.007,-0.091,0.291,0.147,0.163,0.286,0.271,0.185,0.078,0.098,0.3,0.065,-0.054,0.143,-0.106,-0.03,-0.859,-0.018,-0.055,-0.08,-0.258,-0.334,-0.154,0.023,-0.079,0.073,-0.116,-0.129,-0.074,0.252,-0.119,0.902,-0.246,-0.816,0.074,0.255,0.602,0.061,-0.025,-0.057,-0.055,0.078,-0.166,0.479,-0.033,-0.066,-0.031,-0.08,-0.242,-0.181,-0.027,0.077,0.119,0.042,-0.362,0.237,-0.102,-0.321,-0.651,0.103,0.181,0.093,-0.002,-0.138,0.002,0.335,0.033,-0.11,0.047,-0.058,0.074,-0.073,0.036,-0.011,0.165,0.12,-0.028,-0.764,0.637,0.552,0.491,0.64,-0.134,-1.126,-0.433,-0.765,-0.539,0.26,0.56,-0.315,-0.101,-0.433,-0.078,0.094,0.023,-0.025,-0.041,0.24,0.046,0.03,0.198,0.329,0.064,0.056,-0.041,0.272,-0.116,0.27,0.282,-0.081,0.047,-0.203,0.046,0.093,-0.263,-0.147,-0.037,0.131,-0.028,0.693,-0.005,-0.164,0.176,0.212,0.058,0.042,0.122,-0.016,-0.02,-0.005,-0.171,-0.076,-0.39,-0.12,-0.145,-0.355,-0.023,0.082,-0.045,0.26,0.22,-0.463,0.272,-0.439,-0.373,-0.346,-0.028,0.469,-0.397,0.254,0.012,-0.074,0.385,-0.096,0.068,0.178,0.057,-0.121,-0.051,-0.565,0.039,-0.098,0.048,1.743,0.089,0.171,-0.505,0.051,-0.044,0.069,-0.555,0.034,-0.111,0.107,-0.183,0.178,0.155,0.179,-0.29,-0.33,0.092,0.067,0,0.103,0.295,-0.054,-0.169,-0.083,-0.002,0.028,-0.017,-0.068,0.404,0.386,0.021,-0.116,0.142,-0.321,0.148,-0.59,0.223,0.181,-0.163,0.213,0.075,0.325,0.197,-0.105,0.052,0.25,0.071,-0.265,0.109,-0.134,-0.045,-0.044,-0.055,0.201,-0.044,0.097,-0.118,-0.29,-0.125,-0.008,-0.046,0.067,-0.028,-0.005,-0.854,-0.409,-0.569,-0.22,-0.028,-0.081,0.173,0.165,0.042,-0.23,0.208,0.463,-0.071,0.193,-0.128,-0.107,-0.013,-0.057,0.106,0.031,0.013,-0.178,-0.875,-0.683,-0.019,0.213,0.129,-1.306,0.005,-0.875,-0.161,-0.849,0.173,-0.711,-0.058,-2.426,-0.805,-0.179,-0.84,-0.277,0.085,-0.033,-0.019,-0.023,-0.196,-0.193,-0.466,-0.093,0.071,-0.207,-0.108,-0.028,0.016,-0.489,-0.218,0.057,0.224,0.122,0.455,0.096,0.095,-0.315,-0.903,0.168,0.435,-0.039,0.378,0.091,0.035,0.194,-0.231,0.25,0.337,0.028,0.038,-0.015,0.41,0.071,-0.056,0.06,-0.028,0.665,0.567,0.745,0.424,-0.721,-0.056,0.155,0.113,-0.402,1.071,-0.384,-0.435,0.651,-0.242,-0.402,0.104,0.378,0.34,0.484,0.38,-0.016,0.135,0.221,0.208,0.17,-0.001,0.137,-0.003,0.08,0.028,0.209,0.39,-0.064,0.232,0.072,-0.046,0.078,0.07,0.097,-0.18,-0.118,0.28,0.053,-0.387,-0.392,0.174,0.227,0.021,0.055,0.011,0.089,0.092,-0.046,-0.136,-0.089,-0.08,0.012,-0.051,-0.275,-0.826,-0.959,0.088,0.132,-0.366,0.165,0.252,-0.409,0.515,-0.116,-0.205,0.17,-0.395,0.476,-0.413,-0.056,-0.052,-0.247,0.041,0.115,-0.244,0.096,-0.389,0.058,-0.022,0.006,-0.116,-0.157,-0.128,-0.095,0.431,-0.04,0.028,-0.048,-0.42,0.134,-0.77,0.013,-0.219,-0.091,-0.003,-0.021,-0.425,0.024,-0.113,-0.103,-0.037,0.008,0.022,-0.106,-0.052,-0.017,0.061,-0.008,0.113,-0.091,-0.07,0,-0.562,-0.293,-0.032,-0.762,0.033,-0.845,0.115,-0.235,-0.24,0.134,-0.343,0.576,-0.03,-0.433,-0.081,0.181,0.383,-0.042,-0.032,0.076,0.028,0.005,0.017,-0.014,-0.1,-0.189,-0.149,-0.005,-0.418,0.131,-0.202,-0.186,-0.176,-0.055,0.155,-0.145,-0.115,-0.123,0.336,0.074,0.205,0.242,-0.309,0.072,-0.496,-0.052,0.063,0.033,-0.137,-0.199,-0.039,-0.038,0.061,-0.056,-0.079,-0.054,-0.069,-0.042,0.08,0.031,0.031,0.148,0.003,-0.081,-0.027,-0.033,-0.087,-0.075,0.046,0.115,0.097,-0.283,-0.093,0.017,-0.097,-0.045,-0.016,0.015,-0.019,-0.031,-0.009,0.016,0.039,-0.238,0.071,-0.053,-0.061,0.101,-0.419,-0.038,0.05,0.025,0.616,-0.043,-0.425,-0.021,-0.286,0.007,-0.015,0.07,-0.412,-0.116,-0.043,-0.063,-0.081,0.139,0.07,-0.003,-0.052,0.051,0.309,0.083,0.071,-0.043,-0.103,-0.316,0.345,0.011,-0.092,0.163,0.068,-0.029,0.127,-0.17,0.039,0.139,0.067,0.117,0.092,0.008,0.063,-0.048,0.137,0.036,-0.119,0.149,-0.049,0.049,0.035,0.387,-0.037,-0.025,-0.128,-0.113,0.056,-0.154,-0.333,0.234,-0.04,-0.016,-0.021,-0.087,-0.281,-0.139,0.033,-0.064,0.019,-0.197,-0.346,-0.238,-0.35,-0.217,-0.034,0.125,-0.02,-0.011,0.055,0.011,0.1,0.009,0.056,0.067,0.207,0.005,0.128,0.095,0.038,0.046,0.125,0.009,0.118,0.008,0.002,-0.24,0.191,0.152,0.115,-0.164,0.092,0.071,0.034,-0.013,0.121,0.075,0.029,0.092,-0.017,-0.576,0.061,-0.06,0.007,0.075,0.049,0.158,0.155,0.115,0.13,-0.08,0.107,-0.024,0.041,0.024,0.064,0.134,0.063,0.086,0.008,-0.14,0.066,0.03,0.08,0.012,0.077,-0.068,0.004,0.07];

function arSentiment(str, debug = false) {
    // set initial scores
    var score = 0;
    var isPositive;
    var probability;

    // remove mentions
    str = str.replace(/@\\S+/gu, '');
    
    // remove hashtags
    str = str.replace(/#\\S+/gu, '');
    
    // normalise Alef
    str = str.replace(/[أإآى]/gu, 'ا');
    
    // normalise Hamza
    str = str.replace(/[ؤئء]/gu, 'ء');
    
    // normalise Taa
    str = str.replace(/ة/gu, 'ه');
    
    // filter only Arabic text (white list)
    str = str.replace(/[^ ءابتثجحخدذرزسشصضطظعغفقكلمنهوي]+/gu, ' ');
    
    // exclude one letter words
    str = str.replace(/\\b\\S{1}\\b/gu, ' ');
    
    // remove extra spaces
    str = str.replace(/\\s{2,}/gu, ' ');
    str = str.replace(/^\\s+/gu, '');
    str = str.replace(/\\s+$/gu, '');
    
    // split string to words
    var words = str.split(/\s+/u);

    var negationWords = ['لا', 'ليس', 'غير', 'ما', 'لم', 'لن',
                        'لست', 'ليست', 'ليسا', 'ليستا', 'لستما',
                        'لسنا', 'لستم', 'ليسوا', 'لسن', 'لستن'];
    var negationFlag  = false;
  
    // for each word
    words.forEach(function(word) {
        if (word != '') {
            // split word to letters
            var letters = word.split('');
            var stems   = [];
            var logOdds = [];

            // get all possible 2 letters stems of current word
            for (var i = 0; i < letters.length - 1; i++) {
                for (var j = i + 1; j < letters.length; j++) {
                    // get stem key
                    stems.push(allStems.indexOf(letters[i] + letters[j]));
                }
            }

            // get log odd for all word stems
            stems.forEach(function(key) {
                logOdds.push(logOddStem[key]);
            });
            
            // select the most probable stem for current word
            var selStemKey = 0;
            
            for (var k = 1; k < logOdds.length; k++) {
                if (logOdds[k] < logOdds[selStemKey]) selStemKey = k;
            }
            
            var selStem = stems[selStemKey];

            if (negationFlag) {
                // switch positive/negative sentiment because of negation word effect
                score += -1 * logOdd[selStem];

                if (debug) console.log(word + ' score ' + (Math.round(logOdd[selStem]*-1000)/1000).toFixed(3));
                
                negationFlag = false;
            } else {
                // retrive the positive and negative log odd scores and accumulate them
                score += logOdd[selStem];
                
                if (debug) console.log(word + ' score ' + (Math.round(logOdd[selStem]*1000)/1000).toFixed(3));
            }    

            if (negationWords.includes(word)) negationFlag = true;
        }
    });

    if (score > 0) {
        isPositive  = true;
    } else {
        isPositive = false;
    }

    probability = Math.exp(Math.abs(score)) / (1 + Math.exp(Math.abs(score)));
    
    return [isPositive, probability];
}