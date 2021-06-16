// Invoked on the commit-msg git hook by yorkie.
// https://github.com/vitejs/vite/blob/main/scripts/verifyCommit.js
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
