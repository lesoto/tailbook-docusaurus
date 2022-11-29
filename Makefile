.SILENT:
.DEFAULT_GOAL := help

.PHONY: help
help:
	$(info available commands:)
	$(info -> setup                  installs dependencies)
	$(info -> format                 formats source code)
	$(info -> build                  builds deployable version)
	$(info -> test                   runs available tests)
	$(info -> run                    starts application locally)
	$(info -> screenshots            take screenshots)

.PHONY: setup
setup:
	yarn install

.PHONY: format
format:
	yarn run format

.PHONY: build
build:
	yarn run build

.PHONY: test
test:
	yarn test

.PHONY: run
run:
	yarn start

.PHONY: screenshots
publish:
	node screenshots.js
