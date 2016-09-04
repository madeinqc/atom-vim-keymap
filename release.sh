#!/usr/bin/env bash

git subtree push --prefix plugin origin master # push to master
git checkout master # switch to master

echo "Now do the release and run the post-release script"
