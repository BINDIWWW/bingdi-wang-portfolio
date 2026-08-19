# 用 GitHub 建立并展示课程项目

## 最重要的原则

如果课程作业仍在评分、学校禁止公开答案，或数据受 Kaggle/课程许可限制，请先建立 **Private repository**。成绩发布并确认课程政策允许后，再改为 Public。不要上传：

- 受限制的训练集和测试集；
- Kaggle API token、密码、`.env` 或个人凭证；
- 队友未经许可的代码和文字；
- 仍可能被其他学生直接提交的完整作业答案。

## 第一个推荐项目

项目名称：`econometrics-model-selection`

适合展示的英文标题：

> Predictive Regression & Model Selection Case Study

建议描述：

> Built and evaluated regression pipelines using OLS, feature engineering, cross-validation and LASSO. Compared penalty-selection strategies, produced reproducible performance reports and generated out-of-sample predictions for a Kaggle-based applied econometrics case.

建议技能标签：

`Python` · `pandas` · `NumPy` · `scikit-learn` · `statsmodels` · `LASSO` · `Cross-validation` · `Data visualisation`

## 推荐仓库结构

```text
econometrics-model-selection/
├── README.md
├── requirements.txt
├── src/
│   ├── assignment02.py
│   └── generate_report.py
├── report/
│   └── Assignment2_Report.pdf
├── figures/
│   ├── model_comparison.png
│   └── coefficient_summary.png
├── sample_data/
│   └── README.md
├── .gitignore
└── LICENSE
```

若课程数据不能公开，`sample_data/README.md` 只说明如何由获授权用户获取数据，不上传原始 CSV。

## README 应回答的六个问题

1. 解决了什么问题？
2. 使用了什么数据？数据能否公开？
3. 比较了哪些模型和选择方法？
4. 如何避免数据泄漏并开展交叉验证？
5. 得到了什么结果？
6. 招聘方如何在本地复现？

README 首页建议放一张清晰的结果图，避免一上来展示大量公式或代码。

## 网站展示方式

成绩发布且仓库公开后，在个人网站的 Projects 区添加：

- 一句话业务问题；
- 2–3 个关键方法；
- 一个真实且可验证的结果；
- `View project` 按钮链接至 GitHub；
- 可选的 `Read report` 按钮链接至 PDF。

## 后续建议项目

为了申请数据与金融分析实习，建议最终准备三个公开项目：

1. **Predictive Regression & Model Selection**：证明统计建模和 Python 能力；
2. **Equity Valuation Dashboard**：用公开财务数据完成可比公司估值与 Tableau 仪表板；
3. **Economic Forecasting Project**：使用公开澳洲宏观数据进行预测、回测和可视化。

三个扎实且可复现的项目，比十个只有代码、没有解释的仓库更有说服力。
