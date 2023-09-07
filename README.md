# Excel-Calc Report Generator

Is a simple program on the based of a website basis used to generate reports based on a spreadsheet.

If you want to send your employer / co-worker some data in the form of a text message, probably, this is the best solution for you for these purposes.

## HOW TO USE

![added a gif showing the project](./.github/project_img/Peek%202023-09-01%2003-50.gif)

1. Show location of the spreadsheet file.
2. Select the row of interest on the basis of which you want to generate a report / message.
3. If everything checks out click "copy message" at the bottom of the screen.
4. Paste the copied message into WhatsApp or email client or wherever you want to send it to.
5. Close the window with the generated message to be able to select a new row to generate a report / message.

Isn't it trivial ?!

## TECHNOLOGIES

The project is based on [SheetJS](https://sheetjs.com/) solutions.

Pure HTML, CSS and JavaScript were used, as well as the following capabilities: node.js, sass / bem.

Every effort has been made to ensure that the code is written according to the latest standards and solutions and meets the standards of RWD.

## RESTRICTIONS

In the current version it is rigidly set to accept only xlxs files, but SheetJS allows the use of other formats as well.

**NOT TESTED WITH OTHER FORMATS.**

## **[WEBSITE](https://ricc3.github.io/excel-calc_report_generator/)**

## OTHERS

The project is built about the modularity that Node.js allows.
Here's a quick look at what a particular folder is responsible for.

**_.github_** - Responsible for running the site on git from the "dist" folder and hidden graphics for description there.

**_dist_** - It contains the final versions of the project, mainly compressed.

**_src_** - Includes draft versions of the files. These are uncompressed files.