# Tiago Brizolara's website

_It's up at https://www.tiagobrizolara.com._

This is my portfolio site, based on [Mediumish](#mediumish---jekyll-theme).

## Significant changes to Mediumish Jekyll theme:
- Author info, date, ratings were all removed from the boxes (postbox.html and featuredbox.html) and posts (post.html), except for author info, that's still in  the posts.
- Instead, a set of small buttons reflecting the type of media found in the post are shown at the bottom (they are defined in small_buttons_postbox.html) - see image.
![](https://github.com/brizolara/brizolara.github.io/blob/master/assets/images/box-example.png?raw=true)
- Added internationalization via Jekyll plugin *polyglot*. For usage, please check poliglot's README at https://github.com/untra/polyglot.

## Building site

For now, I **couldn't add polyglot correctly to GitHub Pages** (but you can try reading about [GH Pages and Jekyll](https://docs.github.com/pt/free-pro-team@latest/github/working-with-github-pages/about-github-pages-and-jekyll) and [GH Pages and Jekyll plugins](https://docs.github.com/en/enterprise/2.13/user/articles/adding-jekyll-plugins-to-a-github-pages-site). If you succeeded, make a pull request :wink:), so I'm building the site locally and commiting the builded page in the folder \_site. I created a git subtree that links this folder \_site to the branch gh-pages, from which the site is being deployed in GitHub Pages.

So, my current workflow is
- push my changes to the master branch
- `git subtree push --prefix _site origin gh-pages`
- (Just need to be done once) Inside [repository settings](https://github.com/brizolara/brizolara.github.io/settings), set my GitHub Pages site to be buit from the **gh-pages** branch.

### On Air

Voilà. At this point, this would be available at https://brizolara.github.io/ (and if you copy or fork this repository, you have to change the repository name in your _repository settings_).

In my case, I'm hosting the website in a custom domain: tiagobrizolara.com. For doing that, you can check https://docs.github.com/pt/github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site and your hosting service documentation. I'm hosting tiagobrizolara.com at _Namecheap_, so [this](https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages/) and [this](https://gist.github.com/mapsam/ce60b87eea561ea6bdbf) helped me.


## License

This, Mediumish theme and the countries flags from https://github.com/lipis/flag-icon-css/ use the MIT license. You can read a copy of the license in this repository in [LICENSE.txt](https://github.com/brizolara/brizolara.github.io/blob/master/LICENSE.txt). 

---

Below, the original Mediumish README:

---

# Mediumish - Jekyll Theme

[Live Demo](https://wowthemesnet.github.io/mediumish-theme-jekyll/) &nbsp; | &nbsp; [Download](https://github.com/wowthemesnet/mediumish-theme-jekyll/archive/master.zip) &nbsp; | &nbsp; [Documentation](https://bootstrapstarter.com/bootstrap-templates/template-mediumish-bootstrap-jekyll/) &nbsp; | &nbsp; [Buy me a coffee](https://www.wowthemes.net/donate/)

![mediumish](assets/images/mediumish-jekyll-template.png)


### Copyright

Copyright (C) 2019 Sal, https://www.wowthemes.net

**Mediumish for Jekyll** is designed and developed by [Sal](https://www.wowthemes.net) and it is *free* under MIT license. 

<a href="https://www.wowthemes.net/donate/" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

### Contribute

1. [Fork the repo](https://github.com/wowthemesnet/mediumish-theme-jekyll).
2. Clone a copy of your fork on your local
3. Create a branch off of master and give it a meaningful name (e.g. my-new-mediumish-feature).
4. Make necessary changes, commit, push and open a pull request on GitHub.

Thank you!
