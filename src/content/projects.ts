export const projects = [
  {
    "slug": "enterprise-data-engineering",
    "title": "From scattered sources to a single source of insight.",
    "shortTitle": "Enterprise Data Engineering",
    "category": "Data Engineering",
    "categories": [
      "Data Engineering",
      "Data Analytics"
    ],
    "number": "01",
    "eyebrow": "HILLS & DALES \u00b7 ENTERPRISE SYSTEMS",
    "description": "An automated path from vendor APIs and Salesforce to Lakehouse models and Power BI reporting.",
    "role": "Data Engineer Intern / Data Analyst Intern",
    "technologies": [
      "Microsoft Fabric",
      "Azure",
      "SQL",
      "Python",
      "PySpark",
      "Lakehouse",
      "Dataflow Gen2",
      "Power BI"
    ],
    "problem": "Operational and financial reporting depended on fragmented sources and manual processes. The organization needed reliable integration and accessible KPI reporting.",
    "methods": [
      "Integrate vendor API and Salesforce data through automated ELT ingestion.",
      "Organize raw, cleaned, and reporting-ready data into Bronze, Silver, and Gold layers.",
      "Model data with SQL and PySpark and deliver Power BI dashboards for organizational teams."
    ],
    "results": [
      "Reporting supported 40+ stakeholders across executives, HR, operations, and program coordination.",
      "Automation contributed to 100+ hours of manual reporting work saved weekly across the organization."
    ],
    "challenges": [
      "Integrating different vendor systems and aligning data into useful analytical models.",
      "Maintaining technical documentation and SOPs alongside changing workflows."
    ],
    "lessons": [
      "Reliable reporting begins with traceable, maintainable data pipelines.",
      "Business stakeholders need understandable metrics as much as technically sound infrastructure."
    ],
    "limitations": "This is a high-level, anonymized account. The diagram is illustrative and contains no internal schemas, credentials, or employer records.",
    "future": "Continue improving pipeline reliability, documentation, and the accessibility of organizational reporting.",
    "visual": "architecture",
    "github": null
  },
  {
    "slug": "household-financial-stress-testing",
    "title": "What happens when the economy puts households under pressure?",
    "shortTitle": "Household Financial Stress-Testing",
    "category": "Finance",
    "categories": [
      "Finance",
      "Economics",
      "Research",
      "Data Analytics"
    ],
    "number": "02",
    "eyebrow": "CAPSTONE \u00b7 ECONOMIC RESEARCH",
    "description": "A macroeconomic framework for understanding household income sensitivity and financial vulnerability.",
    "role": "Student researcher \u00b7 financial stress-testing capstone",
    "technologies": [
      "Python",
      "FRED API",
      "Pandas",
      "OLS",
      "Newey-West HAC",
      "HC3"
    ],
    "problem": "Unemployment, inflation, and interest rate shocks can affect household income differently across economic regimes. The research examines those relationships to inform financial stress scenarios.",
    "methods": [
      "Pull and align mixed-frequency FRED series into a six-variable dataset with 39 annual observations.",
      "Estimate OLS regressions with Newey-West HAC standard errors.",
      "Use rolling 10-year regressions with HC3 robust standard errors to assess coefficient stability.",
      "Calibrate mild, moderate, and severe scenarios using four historical crisis periods and distributional percentile estimates."
    ],
    "results": [
      "Completed the six-variable, 39-observation macroeconomic dataset and regression framework.",
      "Developed three levels of historically informed stress scenarios.",
      "The resume reports regime-dependent income sensitivity; numerical coefficients and full statistical outputs were not supplied."
    ],
    "challenges": [
      "Aligning mixed-frequency economic series and testing changing relationships over time.",
      "Using a small annual sample without overstating causal conclusions."
    ],
    "lessons": [
      "Robust standard errors and rolling windows help distinguish a stable assumption from one that depends on the economic regime.",
      "Distributional scenarios can communicate uncertainty better than a single point estimate."
    ],
    "limitations": "Only resume summaries were supplied. Coefficients, p-values, model diagnostics, and exact crisis windows are unavailable. Annual aggregation, sample size, and observational relationships limit interpretation. FRED is confirmed as used; SCF and PSID are proposed sources in the brief, with integration unverified.",
    "future": "Validate SCF and PSID integration and explore household-level agent-based simulation or Monte Carlo stress modeling. These extensions are planned, not completed results.",
    "visual": "methodology",
    "github": null
  },
  {
    "slug": "dubuque-street-conditions",
    "title": "Reading a city through the condition of its streets.",
    "shortTitle": "Dubuque Street Network Condition Assessment",
    "category": "Data Analytics",
    "categories": [
      "Data Engineering",
      "Data Analytics",
      "Research"
    ],
    "number": "03",
    "eyebrow": "PUBLIC DATA \u00b7 GEOSPATIAL ANALYTICS",
    "description": "A reproducible GIS pipeline examining pavement condition, maintenance, and data quality across Dubuque.",
    "role": "Project developer and analyst",
    "technologies": [
      "Python",
      "GeoPandas",
      "QGIS",
      "ArcGIS REST API",
      "DAX",
      "Power BI"
    ],
    "problem": "Street condition records need cleaning and spatial context before they can support maintenance analysis.",
    "methods": [
      "Process City of Dubuque public street-rating data covering 3,069 segments, 266 miles, and 2009\u20132021.",
      "Produce condition maps, an interactive web map, and a Power BI-ready model with DAX measures.",
      "Document 15+ data-quality issues and compare pavement wear and treated versus untreated segments."
    ],
    "results": [
      "Reported typical pavement wear: 0.66 condition points per year.",
      "Reported maintenance difference: +28.5 points versus untreated streets.",
      "Identified a 52.7 lane-mile Poor backlog.",
      "Flagged a 2015 survey containing 95% placeholder zeros and lane counts missing on 94% of segments."
    ],
    "challenges": [
      "Separating placeholder values from observed ratings.",
      "Interpreting incomplete lane counts and treatment comparisons."
    ],
    "lessons": [
      "A map is only as defensible as the data-quality work behind it.",
      "Missingness should be visible in a decision-making workflow."
    ],
    "limitations": "Values are reported in Resume 2; underlying source files were not supplied here. The maintenance comparison should not be interpreted as a causal estimate without the project\u2019s controls.",
    "future": "Further validate missing-data handling and extend the condition assessment as new public observations become available.",
    "visual": "street",
    "github": "https://github.com/Prashant3093/dubuque-street-conditions"
  },
  {
    "slug": "cash-flow-prediction",
    "title": "A clearer view of the next twelve weeks.",
    "shortTitle": "Cash Flow Prediction",
    "category": "Finance",
    "categories": [
      "Finance",
      "Machine Learning",
      "Data Analytics"
    ],
    "number": "04",
    "eyebrow": "FORECASTING \u00b7 LIQUIDITY PLANNING",
    "description": "Time-series forecasting and automated cash tracking for small-business liquidity planning.",
    "role": "Project developer",
    "technologies": [
      "Python",
      "Pandas",
      "NumPy",
      "Prophet",
      "ARIMA",
      "Matplotlib",
      "Seaborn",
      "Plotly"
    ],
    "problem": "Small businesses need advance visibility into receivables, payables, and potential cash shortages.",
    "methods": [
      "Preprocess accounts receivable and payable time series with Pandas.",
      "Use Prophet and ARIMA models to forecast 12-week net cash flows.",
      "Automate inflow/outflow tracking and create financial dashboards."
    ],
    "results": [
      "Resume-reported forecast accuracy: approximately 85%.",
      "Resume-reported manual reporting reduction: 50%.",
      "Resume-reported severe cash-level detection: 2\u20134 weeks ahead."
    ],
    "challenges": [
      "Forecast quality depends on the completeness and stability of historical receivable and payable patterns."
    ],
    "lessons": [
      "A useful forecast needs a clear planning horizon and an understandable dashboard."
    ],
    "limitations": "Dataset, evaluation split, accuracy definition, model parameters, and original charts were not supplied. Reported accuracy is not an independently reproduced benchmark.",
    "future": "Document backtesting, error metrics, and uncertainty intervals before comparing model performance.",
    "visual": "forecast",
    "github": null
  },
  {
    "slug": "personal-expense-forecast",
    "title": "Finding the patterns behind everyday spending.",
    "shortTitle": "Personal Expense Visualization & Forecast",
    "category": "Machine Learning",
    "categories": [
      "Machine Learning",
      "Finance",
      "Data Analytics"
    ],
    "number": "05",
    "eyebrow": "PERSONAL FINANCE \u00b7 APPLIED ML",
    "description": "An offline Python dashboard combining transaction cleaning, categorization, and spending forecasts.",
    "role": "Project developer",
    "technologies": [
      "Python",
      "Jupyter Notebook",
      "Gaussian Mixture Models",
      "Linear Regression"
    ],
    "problem": "Raw transaction CSVs make it difficult to see recurring spending patterns or plan a monthly budget.",
    "methods": [
      "Process 5,000+ transactions with automated cleaning and categorization.",
      "Use Gaussian Mixture Model clustering and linear regression for spending analysis.",
      "Forecast monthly spending across six major categories."
    ],
    "results": [
      "Processed more than 5,000 transactions.",
      "Resume reports 90%+ forecasting accuracy across six spending categories."
    ],
    "challenges": [
      "Consistent transaction categories and appropriate forecasting evaluation are essential to meaningful budget insights."
    ],
    "lessons": [
      "Offline workflows can keep personal financial data local while making spending patterns easier to inspect."
    ],
    "limitations": "Original transactions, accuracy definition, validation method, and model outputs were not supplied. No personal transaction records are exposed in this portfolio.",
    "future": "Document evaluation metrics and compare against a simple historical-spending baseline.",
    "visual": "expense",
    "github": null
  }
] as const;
