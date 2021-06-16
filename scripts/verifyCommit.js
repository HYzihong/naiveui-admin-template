/*
 * @Author: your name
 * @Date: 2021-06-16 09:28:30
 * @LastEditTime: 2021-06-16 09:46:49
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /yh-admin/scripts/verifyCommit.js
 */
// Invoked on the commit-msg git hook by yorkie.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const chalk = require("chalk");
const msgPath = process.env.GIT_PARAMS;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const msg = require("fs").readFileSync(msgPath, "utf-8").trim();

const commitRE =
  /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?(.{1,10})?: .{1,50}/;
const mergeRe = /^(Merge pull request|Merge branch)/;

if (!commitRE.test(msg)) {
  if (!mergeRe.test(msg)) {
    console.log(msg);
    console.error(
      `  ${chalk.bgRed.white(" ERROR ")} ${chalk.red(
        `invalid commit message format.`
      )}\n\n` +
        chalk.red(
          `  Proper commit message format is required for automated changelog generation. Examples:\n\n`
        ) +
        `    ${chalk.green(`feat(compiler): add 'comments' option`)}\n` +
        `    ${chalk.green(
          `fix(v-model): handle events on blur (close #28)`
        )}\n\n` +
        chalk.red(
          `  See https://github.com/vuejs/vue-next/blob/master/.github/commit-convention.md for more details.\n`
        )
    );
    process.exit(1);
  }
}
