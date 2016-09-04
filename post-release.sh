git checkout master-release # go back to gitflow release branch
git merge -s subtree master # merge the master back into gitflow release branch
git checkout develop
git merge master-release # merge release back to develop
