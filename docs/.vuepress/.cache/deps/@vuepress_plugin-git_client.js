import {
  isLinkHttp,
  useLocale
} from "./chunk-YTHMMLPD.js";
import {
  useToggle
} from "./chunk-RIJNI5MZ.js";
import {
  computed,
  defineComponent,
  h,
  toValue
} from "./chunk-CQIG4IYY.js";

// node_modules/@vuepress/plugin-git/lib/client/composables/useChangelog.js
import { useData } from "vuepress/client";

// node_modules/@vuepress/plugin-git/lib/client/options.js
var gitOptions = typeof __GIT_OPTIONS__ === "undefined" ? {} : __GIT_OPTIONS__;

// node_modules/@vuepress/plugin-git/lib/client/utils/resolveRepoLink.js
var resolveRepoLink = (link, provider) => {
  if (!link || isLinkHttp(link))
    return link;
  if (provider === "github")
    return `https://github.com/${link}`;
  if (provider === "gitee")
    return `https://gitee.com/${link}`;
  return link;
};

// node_modules/@vuepress/plugin-git/lib/client/composables/useChangelog.js
var RE_ISSUE = /#(\d+)/g;
var useChangelog = typeof __GIT_CHANGELOG__ === "boolean" && __GIT_CHANGELOG__ ? (enabled = true) => {
  const { frontmatter, lang, page } = useData();
  const { pattern = {}, provider } = gitOptions;
  const repo = resolveRepoLink(gitOptions.repo, provider);
  return computed(() => {
    if (frontmatter.value.changelog === false || !toValue(enabled))
      return [];
    const formatter = new Intl.DateTimeFormat(lang.value, {
      dateStyle: "short"
    });
    return (page.value.git?.changelog ?? []).map((item) => {
      const res = {
        date: formatter.format(item.time),
        ...item
      };
      if (pattern.issue && repo) {
        res.message = res.message.replace(RE_ISSUE, (matched, issue) => {
          const url = pattern.issue.replace(":issue", issue).replace(":repo", repo);
          return `<a href="${url}" target="_blank" rel="noopener noreferrer">${matched}</a>`;
        });
      }
      if (pattern.commit && repo) {
        res.commitUrl = pattern.commit.replace(":hash", res.hash).replace(":repo", repo);
      }
      if (pattern.tag && repo && res.tag)
        res.tagUrl = pattern.tag.replace(":tag", res.tag).replace(":repo", repo);
      return res;
    });
  });
} : () => computed(() => []);

// node_modules/@vuepress/plugin-git/lib/client/composables/useContributors.js
import { useData as useData2 } from "vuepress/client";
var useContributors = typeof __GIT_CONTRIBUTORS__ === "boolean" && __GIT_CONTRIBUTORS__ ? (enabled = true) => {
  const { frontmatter, page } = useData2();
  return computed(() => {
    if (frontmatter.value.contributors === false || !toValue(enabled))
      return [];
    return page.value.git.contributors ?? [];
  });
} : () => computed(() => []);

// node_modules/@vuepress/plugin-git/lib/client/composables/useGitLocales.js
var locales = typeof __GIT_LOCALES__ === "undefined" ? {} : __GIT_LOCALES__;
var useGitLocale = () => useLocale(locales);

// node_modules/@vuepress/plugin-git/lib/client/composables/useLastUpdated.js
import { useData as useData3 } from "vuepress/client";
var useLastUpdated = (enabled = true) => {
  const { lang, page } = useData3();
  const locale = useGitLocale();
  return computed(() => {
    if (!toValue(enabled))
      return null;
    const timeStamp = page.value.git?.updatedTime ?? page.value.git?.changelog?.[0].time;
    if (!timeStamp)
      return null;
    const date = new Date(timeStamp);
    const text = new Intl.DateTimeFormat(lang.value, {
      dateStyle: "short",
      timeStyle: "short"
    }).format(timeStamp);
    return {
      date,
      text,
      iso: date.toISOString(),
      locale: locale.value.latestUpdateAt
    };
  });
};

// node_modules/@vuepress/plugin-git/lib/client/components/VPHeader.js
var VPHeader = ({ level = 2, text, anchor }) => h(`h${level || 2}`, { id: anchor, tabindex: "-1" }, h("a", { href: `#${anchor}`, class: "header-anchor" }, h("span", text)));

// node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js
import "/Users/ben/Desktop/Git/x-pai.com/ai-stock-blog/node_modules/@vuepress/plugin-git/lib/client/styles/contributors.css";
var GitContributor = ({ name, url, avatar }) => h(url ? "a" : "span", {
  href: url,
  target: "_blank",
  rel: "noreferrer",
  class: "vp-contributor"
}, [
  avatar ? h("img", { src: avatar, alt: "", class: "vp-contributor-avatar" }) : null,
  h("span", { class: "vp-contributor-name" }, name)
]);
var GitContributors = defineComponent({
  name: "GitContributors",
  props: {
    /** Contributor title */
    title: String,
    /** header level of contributor title */
    headerLevel: {
      type: Number,
      default: 2
    }
  },
  setup(props) {
    const contributors = useContributors();
    const locale = useGitLocale();
    return () => contributors.value.length ? [
      h(VPHeader, {
        level: props.headerLevel,
        anchor: "doc-contributors",
        text: props.title || locale.value.contributors
      }),
      h("div", { class: "vp-contributors" }, contributors.value.map((item) => h(GitContributor, item)))
    ] : null;
  }
});

// node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js
import "/Users/ben/Desktop/Git/x-pai.com/ai-stock-blog/node_modules/@vuepress/plugin-git/lib/client/styles/vars.css";
import "/Users/ben/Desktop/Git/x-pai.com/ai-stock-blog/node_modules/@vuepress/plugin-git/lib/client/styles/changelog.css";
var GitChangelog = defineComponent({
  name: "GitChangelog",
  props: {
    /** Title of changelog */
    title: String,
    /** header level of changelog */
    headerLevel: {
      type: Number,
      default: 2
    }
  },
  setup(props) {
    const changelog = useChangelog();
    const locale = useGitLocale();
    const lastUpdated = useLastUpdated();
    const [active, toggleActive] = useToggle();
    const ChangelogHeader = () => h("div", { class: "vp-changelog-header", onClick: () => toggleActive() }, [
      h("div", { class: "vp-latest-updated" }, [
        h("span", { class: "vp-changelog-icon" }),
        h("span", { "data-allow-mismatch": "" }, lastUpdated.value.text)
      ]),
      h("div", [
        h("span", { class: "vp-changelog-menu-icon" }),
        h("span", locale.value.viewChangelog)
      ])
    ]);
    const ReleaseTag = ({ item }) => h("li", { class: "vp-changelog-item-tag" }, h("div", [
      h("a", { class: "vp-changelog-tag" }, h("code", item.tag)),
      h("span", { "class": "vp-changelog-date", "data-allow-mismatch": "" }, [
        locale.value.timeOn,
        " ",
        h("time", { datetime: new Date(item.time).toISOString() }, item.date)
      ])
    ]));
    const Commit = ({ item }) => h("li", { class: "vp-changelog-item-commit" }, [
      h(item.commitUrl ? "a" : "span", {
        class: "vp-changelog-hash",
        href: item.commitUrl,
        target: "_blank",
        rel: "noreferrer"
      }, [h("code", item.hash.slice(0, 5))]),
      h("span", { class: "vp-changelog-divider" }, "-"),
      h("span", { class: "vp-changelog-message", innerHTML: item.message }),
      h("span", { "class": "vp-changelog-date", "data-allow-mismatch": "" }, [
        locale.value.timeOn || "on",
        " ",
        h("time", { datetime: new Date(item.time).toISOString() }, item.date)
      ])
    ]);
    return () => changelog.value.length ? [
      h(VPHeader, {
        level: props.headerLevel,
        anchor: "doc-changelog",
        text: props.title || locale.value.changelog
      }),
      h("div", { class: ["vp-changelog-wrapper", { active: active.value }] }, [
        h(ChangelogHeader),
        h("ul", { class: "vp-changelog-list" }, [
          changelog.value.map((item) => item.tag ? h(ReleaseTag, { item, key: item.tag }) : h(Commit, { item, key: item.hash }))
        ])
      ])
    ] : null;
  }
});
export {
  GitChangelog,
  GitContributor,
  GitContributors,
  VPHeader,
  locales,
  useChangelog,
  useContributors,
  useGitLocale,
  useLastUpdated
};
//# sourceMappingURL=@vuepress_plugin-git_client.js.map
