export const projects = [
  {
    "slug": "enterprise-data-engineering",
    "title": "Data pipelines at Hills & Dales.",
    "shortTitle": "Enterprise Data Engineering",
    "category": "Data Engineering",
    "categories": [
      "Data Engineering",
      "Data Analytics"
    ],
    "number": "01",
    "eyebrow": "HILLS & DALES · ENTERPRISE SYSTEMS",
    "description": "Vendor APIs and Salesforce data, processed in Microsoft Fabric and reported in Power BI.",
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
      "Keeping raw, cleaned, and reporting data in separate layers makes transformations easier to trace.",
      "Clear KPI definitions help teams use the same report consistently."
    ],
    "limitations": "The architecture diagram is simplified. Internal schemas and organizational data are not public.",
    "future": "Improve pipeline reliability, documentation, and reporting access.",
    "visual": "architecture",
    "github": null
  },
  {
    "slug": "household-financial-stress-testing",
    "title": "Household financial stress testing.",
    "shortTitle": "Household Financial Stress-Testing",
    "category": "Finance",
    "categories": [
      "Finance",
      "Economics",
      "Research",
      "Data Analytics"
    ],
    "number": "02",
    "eyebrow": "CAPSTONE · ECONOMIC RESEARCH",
    "description": "Studying how unemployment, inflation, and interest rates relate to household income.",
    "role": "Student researcher · financial stress-testing capstone",
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
      "Built a six-variable dataset with 39 annual observations.",
      "Created mild, moderate, and severe scenarios using four historical crisis periods.",
      "Rolling regressions indicated that income sensitivity changed across periods; detailed estimates are not published here."
    ],
    "challenges": [
      "Aligning mixed-frequency economic series and testing changing relationships over time.",
      "Using a small annual sample without overstating causal conclusions."
    ],
    "lessons": [
      "Rolling regressions show how estimates change across periods.",
      "Scenario ranges account for more uncertainty than a single estimate."
    ],
    "limitations": "The sample contains only 39 annual observations. These are statistical associations, not proof of causation. Full regression tables and diagnostics are not published here. FRED data is included; SCF and PSID integration is not confirmed.",
    "future": "Explore SCF and PSID household data, agent-based simulation, and Monte Carlo methods. These extensions are planned.",
    "visual": "methodology",
    "github": null
  },
  {
    "slug": "dubuque-street-conditions",
    "title": "Dubuque street conditions.",
    "shortTitle": "Dubuque Street Network Condition Assessment",
    "category": "Data Analytics",
    "categories": [
      "Data Engineering",
      "Data Analytics",
      "Research"
    ],
    "number": "03",
    "eyebrow": "PUBLIC DATA · GEOSPATIAL ANALYTICS",
    "description": "A Python and GIS analysis of pavement ratings, maintenance, and missing data.",
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
      "Process City of Dubuque public street-rating data covering 3,069 segments, 266 miles, and 2009–2021.",
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
      "Placeholder zeros can distort condition summaries if treated as actual ratings.",
      "Missing lane counts need to be accounted for when estimating a maintenance backlog."
    ],
    "limitations": "The reported maintenance difference is a comparison between treated and untreated streets, not a causal estimate. The map shown here is illustrative.",
    "future": "Check missing-data assumptions and update the analysis as new street ratings become available.",
    "visual": "street",
    "github": "https://github.com/Prashant3093/dubuque-street-conditions"
  },
  {
    "slug": "cash-flow-prediction",
    "title": "Twelve-week cash flow forecasting.",
    "shortTitle": "Cash Flow Prediction",
    "category": "Finance",
    "categories": [
      "Finance",
      "Machine Learning",
      "Data Analytics"
    ],
    "number": "04",
    "eyebrow": "FORECASTING · LIQUIDITY PLANNING",
    "description": "Forecasting receivables, payables, and net cash flow with Prophet and ARIMA.",
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
      "Reported forecast accuracy: approximately 85%.",
      "Reported reduction in manual reporting: 50%.",
      "Reported warning time for severe cash-flow levels: 2–4 weeks."
    ],
    "challenges": [
      "Forecast quality depends on the completeness and stability of historical receivable and payable patterns."
    ],
    "lessons": [
      "A twelve-week forecast needs to be paired with receivables and payables tracking to support liquidity planning."
    ],
    "limitations": "These performance figures are project estimates. The accuracy definition, validation split, and backtest results are not published here.",
    "future": "Document backtesting, forecast errors, and prediction intervals.",
    "visual": "forecast",
    "github": null
  },
  {
    "slug": "personal-expense-forecast",
    "title": "Personal expense analysis and forecasting.",
    "shortTitle": "Personal Expense Visualization & Forecast",
    "category": "Machine Learning",
    "categories": [
      "Machine Learning",
      "Finance",
      "Data Analytics"
    ],
    "number": "05",
    "eyebrow": "PERSONAL FINANCE · APPLIED ML",
    "description": "An offline Python dashboard for cleaning, categorizing, and forecasting transaction data.",
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
      "Reported forecasting accuracy above 90% across six spending categories."
    ],
    "challenges": [
      "Categorization errors affect both spending summaries and forecast evaluation."
    ],
    "lessons": [
      "An offline dashboard can analyze spending without uploading personal transaction records."
    ],
    "limitations": "The accuracy measure and validation method are not published here. No personal transaction records are shared on this site.",
    "future": "Document validation and compare forecasts with a historical-spending baseline.",
    "visual": "expense",
    "github": null
  }
] as const;
